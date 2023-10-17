"use client";

import { useRouter } from 'next/navigation';

function ReloadButton() {
  const router = useRouter();

  const handleReload = () => {
    navigation.reload();
  };

  return (
    <button className="ml-5 btn rounded-xl bg-custom-green" onClick={handleReload}>Clear Filters</button>
  );
}

export default ReloadButton;