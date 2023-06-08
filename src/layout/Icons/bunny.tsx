import Image from "next/image";
import { useRouter } from "next/router";

export default function Bunny() {
  const router = useRouter();
  const size = 20;
  return (
    <Image
      src={`${router.basePath}/icons/easter-bunny.png`}
      alt="bunny"
      width={size}
      height={size}
      style={{ marginRight: 10 }}
    ></Image>
  );
}
