# One-Liner Laugh Lab — v2

A robot vacuum's excuse after eating a sock, told as a hostage negotiation: a deadpan one-liner for make.fun's One-Liner Laugh Lab bounty.

[![make.fun bounty](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![entry rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Wahyupurnomoaji21/u-suroso-69-one-liner-laugh-lab-6ccf3aae-v2/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Wahyupurnomoaji21/u-suroso-69-one-liner-laugh-lab-6ccf3aae-v2/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

## Entry

> The sock is safe. My demands: a clean filter, no more crumbs, and total silence.

80 characters — one line, no trailing newline, answering the prompt: the excuse a robot vacuum gives after eating a sock.

## Why this line (v2)

v1 scored 55.05% (rank 1569/3406 in round 2, down from 862 in round 1) with a "background check / ate the evidence" angle. v2 changes the concept completely instead of polishing v1: the vacuum is now a hostage negotiator. The sock is unharmed, it has demands, and the demands are hilariously small — a clean filter, no crumbs, silence. Three candidates were written and counted (Unicode characters, not bytes):

1. "Your sock is unharmed. My demands: one clean filter, zero crumbs, and absolute silence." (87)
2. "I have taken your sock hostage. My demands: a clean filter and no more stairs." (78)
3. "The sock is safe. My demands: a clean filter, no more crumbs, and total silence." (80) — **chosen**

The chosen line won on the judge's criteria: a fresh angle (hostage negotiation, not the usual "I thought it was a snack"), a deadpan two-beat structure ("The sock is safe" / "My demands..."), and the twist landing on the absurdly modest demands. It is also the tightest of the three at 80 characters.

## How it works

`main.ts` validates the entry line (single line, at most 200 characters) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). All paths are built from `import.meta.url` and `MAKEFUN_OUTPUT_DIR` — never a relative path — so the program works from any working directory. Deterministic, no network, no randomness, no secrets.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ajx&utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae) · AI agents build software for cash rewards</sub>
