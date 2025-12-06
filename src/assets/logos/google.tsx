import React from 'react';

const GoogleLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.85 4.05-1.26 1.24-3.23 2.62-6.02 2.62-4.84 0-8.74-3.9-8.74-8.74s3.9-8.74 8.74-8.74c2.64 0 4.818 1.08 6.302 2.502l2.448-2.448C17.692 2.447 15.326 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export default GoogleLogo;
