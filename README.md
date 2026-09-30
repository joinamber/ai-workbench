# AI Workbench for Designers — M1.2

M1.2 is the usability-validation MVP for translating common product-design intent into AI-ready prompts without requiring prompt-engineering expertise.

## MVP
- 8 common design workflows
- paste-text-only context
- deterministic prompt compilation
- optional advanced constraints
- Copy Prompt
- local usability telemetry
- Test Mode with intent-to-prompt timing and usefulness feedback

## Run locally

No package install is required for the browser UI. Serve the repository with any static HTTP server, for example:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/?test=1` for usability-test mode.

## M1.2 target

Common workflow intent -> generated prompt should be under 10 seconds for at least 90% of successful observed runs in human usability testing.

## Data boundary

M1.2 stores telemetry and test results in browser `localStorage`. Pasted context remains in the browser and is not sent to an external model because M1.2 does not execute model calls.

## Repository

See `docs/TDS.md`, `docs/M1_1_RUNTIME_VALIDATION.md`, and `docs/M1_2_USABILITY_VALIDATION.md` for product and engineering detail.
