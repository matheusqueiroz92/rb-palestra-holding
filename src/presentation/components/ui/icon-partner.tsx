interface IconPartnerProps {
    color?: string;
    width: number;
    height: number;
}

export function IconPartner({ width, height, color }: IconPartnerProps) {
    return (
        <svg
            fill={color ?? "#C9A84C"}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
            ></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g
                id="SVGRepo_iconCarrier"
            >
                <path
                    d="M0 0h48v48H0z"
                    fill="none"
                ></path>
                <g
                    id="Shopicon"
                >
                    <path
                        d="M35.23,18.781C37.491,17.367,39,14.863,39,12c0-4.418-3.582-8-8-8s-8,3.582-8,8c0,2.863,1.509,5.367,3.77,6.781 c-1.423,0.537-2.714,1.334-3.821,2.337C22.51,17.115,19.12,14,15,14c-4.418,0-8,3.582-8,8c0,2.863,1.509,5.367,3.77,6.781 C6.232,30.492,3,34.862,3,40h24c0-4.177-2.134-7.851-5.37-10H43C43,24.862,39.768,20.492,35.23,18.781z M31,20 c1.18,0,2.296-0.262,3.304-0.72L31,24l-3.304-4.72C28.704,19.738,29.82,20,31,20z M15,30c1.18,0,2.296-0.262,3.304-0.72L15,34 l-3.304-4.72C12.704,29.738,13.82,30,15,30z"
                    ></path>
                </g>
            </g>
        </svg>
    )
}