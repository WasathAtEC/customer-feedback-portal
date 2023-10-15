import Image from "next/image";

export default function BgImage(){
    return(
        <Image src="/dsk5.svg" alt="hello" layout="fill" objectFit="cover"  style={{zIndex:'-1000',opacity: "0.75"}} />

    );
}