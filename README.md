## YaretUI

YaretUI is a components library built with React + TypeScript + TailwindCss

## Status

[![NPM Version](https://img.shields.io/npm/v/yaret-ui.svg)](https://www.npmjs.com/package/yaret-ui)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ReboDev94/yaret-ui/blob/main/LICENSE)
[![npm bundle size](https://badgen.net/bundlephobia/minzip/yaret-ui)](https://bundlephobia.com/package/yaret-ui@latest)
[![npm](https://img.shields.io/npm/dt/yaret-ui?label=installs)](https://www.npmjs.com/package/yaret-ui)

## Install

Install with npm or yarn

```bash
npm install yaret-ui
or
yarn add yaret-ui
```

## Quick Start

import component from yaret-ui

```js
import { Input, Button } from 'yaret-ui';

function App() {
  return (
    <div>
      <Input />
      <Button>Click</Button>
    </div>
  );
}
```

## Custom colors

1. create styles.css file

```css
:root {
  --color-primary: 45 85 155;
  --color-secondary: 139 58 98;
  --color-success: 50 168 82;
  --color-error: 231 76 60;
  --color-warning: 253 203 88;
  --color-info: 52 152 219;
  --color-light: 245 245 245;
  --color-dark: 2 6 23;
}
```

2. Import styles.css file in  main.tsx

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Components

Visit [Storybook](https://yaret-ui.vercel.app) view all components
