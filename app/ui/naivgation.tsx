"use client";

import Link from 'next/link';

function Navigation() {
  return (
    <div className="container">
      <Link href="/#abajo" scroll={true}>
        Abajo Disabled
      </Link>
    </div>
  );
}

export default Navigation;
