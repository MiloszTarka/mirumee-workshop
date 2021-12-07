import Image from "next/image";

// Step 2: Make Product component accept name prop and display it!

// Step 9: Add thumbnailUrl prop and display the image

// Step 10: Add TS types 🚀
type Props={
  name: string;
  thumbnailUrl: string;
}
export function Product({name, thumbnailUrl}: Props) {
  return (
  <div className="shadow-lg">
    <Image src={thumbnailUrl} width={200} height={150} objectFit="cover"/>
    <div className="text-md text-gray-500">{name}</div>
  </div>
  );
}
