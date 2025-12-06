import React from 'react';

const AicsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>AICS</title>
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16zm-5.5-9.5h2v7h-2zm-3-2h2v9h-2zm6-2h2v11h-2z" />
  </svg>
);

export default AicsLogo;
