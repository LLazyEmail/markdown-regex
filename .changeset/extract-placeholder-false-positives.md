---
"markdown-regex": patch
---

Fix `extract()` false positives: stripped code no longer shows up in `bold` (the `__CODE_BLOCK__` / `__INLINE_CODE__` placeholders matched the `__text__` branch of `REGEXP_STRONG`), and `**bold**` is no longer also reported as italic `*bold*`. Italic nested inside bold (`**a *b* c**`) is now found.
