# M1 Technical Design Specification

## System contract
M1 translates designer intent into AI-ready prompts. Common workflows are versioned data objects; prompts are generated artifacts.

## Architecture
M1 is a modular monolith / static-browser MVP:

UI -> Workflow Definitions -> Deterministic Prompt Compiler -> Prompt Output
                         -> Local Telemetry

No model call is required for M1 prompt compilation.

## Core components
- workflow catalog
- workflow definition schema
- deterministic prompt compiler
- prompt/run telemetry
- usability feedback store

## Critical requirements
- common workflow intent -> prompt <10s target;
- compiler P95 <500ms target;
- deterministic compilation for identical workflow/template/input versions;
- no external transmission of pasted context in M1.

## Future boundary
M2 can add model execution, context ingestion and structured AI outputs without changing the core workflow model.
