Save the scripts in **~/.script** and add the following to **~/.bashrc**

```bash
export WORKPATH=/path/to/work/dir
for filename in ~/.scripts/*.sh; do
  source $filename
done
```

# fetch_all:
#### It fetches all remote git branches. Usage:
```bash
$ cd /path/to/repo fetch_all
```

# work
#### It cds into your work projects from any location. Usage:
```bash
$ work <project name in WORKPATH>
