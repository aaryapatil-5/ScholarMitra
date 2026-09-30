# ScholarMitra

This edition deliberately has **zero npm dependencies** and does not use React, Vite, Rollup, esbuild, or native `.node` binaries. It is designed to avoid the `ERR_DLOPEN_FAILED` issue you encountered.
System Architecture
                    ┌───────────────┐
                    │    Student    │
                    └───────┬───────┘
                            │
                            ▼
                 ┌───────────────────┐
                 │ React Web Portal  │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │   FastAPI API     │
                 └─────────┬─────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
      ┌──────────┐   ┌────────────┐ ┌────────────┐
      │ Document │   │ Eligibility│ │ Workflow   │
      │ AI/OCR   │   │ Engine     │ │ Engine     │
      └────┬─────┘   └─────┬──────┘ └─────┬──────┘
           │               │              │
           └───────────────┼──────────────┘
                           ▼
                    ┌────────────┐
                    │  MySQL DB  │
                    └─────┬──────┘
                          │
             ┌────────────┴────────────┐
             ▼                         ▼
      Student Dashboard         Officer Dashboard

## Run

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**.

Works with your Windows x64 + Node v24.19.0 setup, including Git Bash.
