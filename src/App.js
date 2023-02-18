import React from 'react';
import './style.css';
import { marked } from 'marked';
// or const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
