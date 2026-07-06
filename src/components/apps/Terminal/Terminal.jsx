import React from "react";
import WindowWrapper from '../../hoc/WindowWrapper/index';
import TerminalContent from './components/TerminalContent/index';
import './Terminal.css';

export default function TerminalApp() {
  return (
    <WindowWrapper id="terminal" title="Terminal" icon="💻" width={740} height={480}>
      <TerminalContent />
    </WindowWrapper>
  );
}