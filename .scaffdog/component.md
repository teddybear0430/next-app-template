---
name: 'component'
message: 'Enter Title of your component (no space)'
root: '.'
output: './components'
ignore: []
questions:
  name: "Please enter component name.(Convert to Pascal case.)"
---

# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx

```tsx
import React from 'react'

type Props = {}

export const {{ inputs.name }}: React.FC<Props> = ({}) => {
  return (
    <div>
    Component
    </div>
  )
}
```

# {{ inputs.name | pascal }}/index.ts

```typescript
export * from './{{ inputs.name | pascal }}';
```
