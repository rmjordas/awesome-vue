import json
from datetime import timedelta
from glob import glob
from os.path import basename

import requests
import requests_cache
from rich.progress import track

requests_cache.install_cache(
    backend=requests_cache.FileCache(
        user_cache_dir=True,
    ),
    expire_after=timedelta(10),
)


def run():
    for fname in glob("content/*/*.data.json"):
        rich_data = _process_file(fname)
        open(
            fname.replace(".data.", ".data-rich."),
            "w",
        ).write(json.dumps(rich_data, indent=2, ensure_ascii=False))


def _process_file(fname: str):
    data = json.loads(open(fname, encoding="utf-8").read())
    return {
        key: _enrich_data(items)
        for key, items in track(
            data.items(),
            description=basename(fname),
        )
    }


def _enrich_data(items):
    return [_fetch_additional_data(i) for i in items]


def _fetch_additional_data(item: dict[str, str]):
    return item | {
        "github": _fetch_gh_data(item),
        "npmjs": _fetch_npmjs_data(item),
    }


def _fetch_gh_data(item):
    name = item["url"][19:]
    url = f"https://api.github.com/search/repositories?q=@{name}"

    data = requests.get(url).json()

    if not data.get("items"):
        print(f"Repo {name} not found", data)
        return None

    item_data = data["items"][0]
    return {
        "stars": item_data["stargazers_count"],
        "pushedAt": item_data["pushed_at"],
    }


def _fetch_npmjs_data(item):
    name = item.get("npmName") or item.get("name")
    url = f"https://registry.npmjs.org/{name}"

    data = requests.get(url).json()

    releases = list(data["time"].items())
    last_release, last_release_at = releases[-1]

    return {
        "lastRelease": last_release,
        "lastReleaseAt": last_release_at,
    }


if __name__ == "__main__":
    run()
