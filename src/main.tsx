// React 관련 임포트
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 메인 앱 컴포넌트와 스타일
import App from "./App.tsx";
import "./index.css";

/**
 * 앱 진입점
 * React 18의 createRoot API를 사용하여 앱을 DOM에 렌더링합니다
 * BrowserRouter로 라우팅 기능을 활성화하고, StrictMode로 개발 중 문제를 감지합니다
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {" "}
    {/* 개발 모드에서 잠재적 문제 감지 */}
    <BrowserRouter>
      {" "}
      {/* React Router 활성화 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
