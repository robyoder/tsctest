# Test project for TypeScript bug

## STR

1. `npm install`
2. `npm run build`

## Expected

No error

## Actual

```
index.ts(7,14): error TS4023: Exported variable 'thing2' has or is using name 'ThingB' from external module "/Users/rob/Projects/tsctest/thingB" but cannot be named.
```

See the following:

* https://github.com/Microsoft/TypeScript/issues/5938
* https://github.com/Microsoft/TypeScript/issues/8612
* https://github.com/Microsoft/TypeScript/issues/19825