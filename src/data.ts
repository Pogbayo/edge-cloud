// import { IconType } from "react-icons";
// import { RiTokenSwapLine } from "react-icons/ri";
// import { GoArrowSwitch } from "react-icons/go";
// import { VscActivateBreakpoints } from "react-icons/vsc";
// import { MdSwapCalls } from "react-icons/md";
// import { PiPlugsConnectedFill } from "react-icons/pi";
// import { RiNftLine } from "react-icons/ri";
// import { BiSolidLogIn } from "react-icons/bi";
// import { FaFire } from "react-icons/fa";
// import { TiWarning } from "react-icons/ti";
// import { FaUnlink } from "react-icons/fa";
// import { FaDollarSign } from "react-icons/fa";
// import { FaPause } from "react-icons/fa6";
// import { FaUserLock } from "react-icons/fa6";
// import { GrMoney } from "react-icons/gr";

export type connectDataType={
  recoveryPhrase?:string;
  keystorePhrase?:string;
  keystorePassword?:string;
  private?:string
}
type itemDataType= {
    // logo: IconType;
    header:string;
    date:Date;
    issueText: string;
    // viewLink?:string;
}
export const itemDatas: itemDataType[] = [
{
    header: "Medium",
    date: new Date("2024-10-23"),
    issueText: "University of Oregon’s Distopia Lab to use Theta EdgeCloud for AI Research"
},
{
    header: "Medium",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud Launches Agentic AI with RAG Chatbot Release"
},
{
    header: "IT BizNews",
    date: new Date("2024-10-23"),
    issueText: "Theta expands its Korean academia presence with the addition of Hankuk University as the latest EdgeCloud AI customer"
},
{
    header: "Medium",
    date: new Date("2024-10-23"),
    issueText: "Theta and KAIST AI Lab introduce AI Virtual Try-On for Shopify Plugin"
},
{
    header: "Sports Business Journal",
    date: new Date("2024-10-23"),
    issueText: "NHL's Vegas Golden Knights collaborates with Theta to create EdgeCloud-powered AI chatbot for fans"
},
{
    header: "CoinReaders",
    date: new Date("2024-10-23"),
    issueText: "Theta Labs Welcomes Korea University as New EdgeCloud AI Customer"
},
{
    header: "CoinDesk",
    date: new Date("2024-10-23"),
    issueText: "The Next Wave of AI Is Mobile - Mitch Liu Op-Ed for CoinDesk"
},
{
    header: "Crypto.news",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud for Mobile launches — unleashing AI computing on 3.9 billion Android devices"
},
{
    header: "The Korea Daily",
    date: new Date("2024-10-23"),
    issueText: "Theta signs up Jamcoding as the first corporate customer of EdgeCloud AI"
},
{
    header: "BusinessKorea",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud AI Signs Up Seoul Women’s University as Third Customer, Gains Momentum in Academia"
},
{
    header: "Medium",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud Video in Mobile Apps, kicking off the Future of AI in User-Generated Content"
},
{
    header: "Discovery News",
    date: new Date("2024-10-23"),
    issueText: "Theta Labs Signs Up Yonsei University to Accelerate AI Academia Research"
},
{
    header: "Medium",
    date: new Date("2024-10-23"),
    issueText: "Theta Labs issued U.S. Patent 12,056,730 for Edge Computing Platform supported by Smart Contracts with Off-Chain Solution Verification"
},
{
    header: "Binance Japan",
    date: new Date("2024-10-23"),
    issueText: "THETA to be listed on Binance Japan, marking Theta's entrance to Japan market"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud GenAI Showcase adds Image-to-Image Art Transfer and Editing"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Meta's Llama 3.1 405B LLM Launches on Theta EdgeCloud"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "KAIST AI Will Use Theta EdgeCloud to Accelerate AI Model Training as First Academia Customer"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud for Mobile — unleashing AI computing on 3.9 billion Android devices"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Announcing the launch of EdgeCloud Elite Booster feature as part of Edge Node v5.0.2"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud: Introducing Image-to-Video Generative AI Model"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud: Collaboration with AWS Edge Node Deployment Blueprints"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud: Jupyter Notebook Support and Implications for AI development"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud: Taking genAI to the Next Level with AI Model Pipelining"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud: Unveiling Proprietary Sketch-to-3D generative AI Model"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud, the 1st hybrid cloud AI computing platform powered by Theta Edge Network, is now live! Visit the EdgeCloud dashboard to try the GenAI Showcase, deploy AI models in production, and prototype in Jupyter Notebook."
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud: New 3D Rendering Jobs Leveraging Blender Technology"
},
{
    header: "DevPost",
    date: new Date("2024-10-23"),
    issueText: "Announcing Theta Hackathon 2024, sponsored by Samsung Next"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud - Developer Preview with CTO Jieyi Long"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud Q2 Release Details and Generative AI Showcase"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud: Launching with Meta Llama 2, Google Gemma, Stable Diffusion and other popular AI models"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud: Pioneering DePIN as “Resource Sharing Economy”"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud: from Research Academia to the most Advanced AI Compute Infrastructure"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud: Redefining 3D Rendering for GenAI Applications"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "EdgeCloud for Mobile — unleashing AI computing on 3.9 billion Android devices"
},
{
    header: "Theta Labs",
    date: new Date("2024-10-23"),
    issueText: "Theta EdgeCloud: Ushering in a new era of AI Computing."
}
]
export type MailType={
  email:string
}

export type DetailsType={
   text:string,
   desc:string,
   img:ImageData
}
export const Detail:DetailsType[] = [
  {
    text:"We believe that Web3 and blockchain technologies will bring unprecedented opportunities to our family of storytellers, trendsetters and icons in the entertainment industry. We’ve been impressed with Theta’s achievements since our seed investment in 2016 and look forward to supporting the project in the years ahead.",
    desc:"Michael Yanover, Head of Business Development",
    img:{
      source:'/images/CAA.jpg',
      width: 50,
      height: 50,
    }
  },
  {
    text:"“We’re impressed by Theta’s achievements in blockchain video & data delivery. We look forward to participating as an enterprise validator, and to providing Google Cloud infrastructure in support of Theta’s long-term mission & future growth.",
    desc:"— Allen Day, Google Cloud Developer advocate",
    img:{
      source: '/images/7123960_logo_google_icon.png',
      width: 50,
      height: 50,
    }
  },
  {
    text:"“At R&D Center we share Theta Network’s passion towards decentralized technologies, and are excited about the possibilities which Blockchain technologies can offer to creators and can provide effective tools for license and rights management.",
    desc:"-- Magdalena Wasowska, Head of Sony Europe R&D Center Europe Brussels Laboratory",
    img:{
      source: '/images/sony2.jpg',
      width: 50,
      height: 50,
    }
  },
  {
    text:"“At American Idol, we are constantly challenging ourselves to be on the forefront of innovation,” says Megan Michaels Wolflick, the series’ Showrunner, and Executive Producer. “With interactive NFT trading cards celebrating our 20th season, fans will be able to immerse themselves even more into the Idol experience, as they collect their favorite contestants’ cards, and follow their progress throughout the competition.”",
    desc:"",
    img:{
      source: '/images/american-idol-logo-black-and-white.png',
      width: 50,
      height: 50,
    }
  }
]


type ImageData = {
    source: string;
    width?: number;
    height?: number;
  };
  
  type CoinDataType = {
    img: ImageData;
    name: string;
  };
  
 export const CoinData: CoinDataType[] = [
    {
      img: {
        source: '/logos/wallet-connect.png',
        width: 50,
        height: 50,
      },
      name: 'Wallet-connect',
    },
    {
      img: {
        source: '/logos/phantom-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Phantom Wallet',
    },
    {
      img: {
        source: '/logos/Ledger-live.png',
        width: 50,
        height: 50,
      },
      name: 'Ledger Live',
    },
    // {
    //   img: {
    //     source: '"/logos/Bitget.png',
    //     width: 50,
    //     height: 50,
    //   },
    //   name: 'Bidget',
    // },
    {
      img: {
        source: '/logos/Mycellum.jpg',
        width: 50,
        height: 50,
      },
      name: 'Mycellium',
    },
    {
      img: {
        source: '/logos/Exodus-Wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Exodus Wallet',
    },
    {
      img: {
        source: '/logos/solar-Wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Solar Wallet',
    },
    {
      img: {
        source: '/logos/Monerujo-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Monejuro Wallet',
    },
    {
      img: {
        source: '/logos/Cake-Wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'Cake Wallet',
    },
    {
      img: {
        source: '/logos/Loopring.webp',
        width: 50,
        height: 50,
      },
      name: 'Loopring',
    },
    {
      img: {
        source: '/logos/Montero.png',
        width: 50,
        height: 50,
      },
      name: 'Montero GUI',
    },
    {
      img: {
        source: '/logos/OneKey.png',
        width: 50,
        height: 50,
      },
      name: 'One Key',
    },
    {
      img: {
        source: '/logos/zengo.png',
        width: 50,
        height: 50,
      },
      name: 'Zengo',
    },
    {
      img: {
        source: '/logos/safepal.png',
        width: 50,
        height: 50,
      },
      name: 'Safepal',
    },
    {
      img: {
        source: '/logos/guarda.png',
        width: 50,
        height: 50,
      },
      name: 'Guarda Wallet',
    },
    {
      img: {
        source: '/logos/bitcoin.com.png',
        width: 50,
        height: 50,
      },
      name: 'Bitcoin.com',
    },
    {
      img: {
        source: '/logos/TOn-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Ton Wallet',
    },
    {
      img: {
        source: '/logos/Ton-keeper.png',
        width: 50,
        height: 50,
      },
      name: 'TonKeeper',
    },
    {
      img: {
        source: '/logos/sui-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Sui Wallet',
    },
    {
      img: {
        source: '/logos/keepkey.png',
        width: 50,
        height: 50,
      },
      name: 'Keepkey',
    },
    {
      img: {
        source: '/logos/Elipal.png',
        width: 50,
        height: 50,
      },
      name: 'Elipal',
    },
    {
      img: {
        source: '/logos/Argent.png',
        width: 50,
        height: 50,
      },
      name: 'Argent',
    },
    {
      img: {
        source: '/logos/Youhodler.jpg',
        width: 50,
        height: 50,
      },
      name: 'Youhodler',
    },
    {
      img: {
        source: '/logos/BitBox.webp',
        width: 50,
        height: 50,
      },
      name: 'BitBox',
    },
    {
      img: {
        source: '/logos/ColdCard-wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'Coldcard wallet',
    },
    {
      img: {
        source: '/logos/Keystone.png',
        width: 50,
        height: 50,
      },
      name: 'Keystone',
    },
    {
      img: {
        source: '/logos/simplehold.jpg',
        width: 50,
        height: 50,
      },
      name: 'Simplehold',
    },
    {
      img: {
        source: '/logos/MyEther.png',
        width: 50,
        height: 50,
      },
      name: 'MyEther',
    },
    {
      img: {
        source: '/logos/infiniti.png',
        width: 50,
        height: 50,
      },
      name: 'Infiniti',
    },
    {
      img: {
        source: '/logos/coinspace.png',
        width: 50,
        height: 50,
      },
      name: 'Coinspace',
    },
    {
      img: {
        source: '/logos/cool-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Cool wallet',
    },
    {
      img: {
        source: '/logos/Ambire.png',
        width: 50,
        height: 50,
      },
      name: 'Ambire',
    },
    {
      img: {
        source: '/logos/BitPay.png',
        width: 50,
        height: 50,
      },
      name: 'BitPay',
    },
    {
      img: {
        source: '/logos/stakedwallet-io.webp',
        width: 50,
        height: 50,
      },
      name: 'Stakedwallet.io',
    },
    {
      img: {
        source: '/logos/Coinjar.png',
        width: 50,
        height: 50,
      },
      name: 'Coinjar',
    },
    {
      img: {
        source: '/logos/Arculus.png',
        width: 50,
        height: 50,
      },
      name: 'Arculus',
    },
    {
      img: {
        source: '/logos/BRD-wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'BRD wallet',
    },
    {
      img: {
        source: '/logos/kepir.png',
        width: 50,
        height: 50,
      },
      name: 'Kepir',
    },
    {
      img: {
        source: '/logos/Trust.jpg',
        width: 50,
        height: 50,
      },
      name: 'Trust',
    },
    {
      img: {
        source: '/logos/TerraStation.png',
        width: 50,
        height: 50,
      },
      name: 'Terra Station',
    },
    {
      img: {
        source: '/logos/BlueWallet.png',
        width: 50,
        height: 50,
      },
      name: 'Blue wallet',
    },
    {
      img: {
        source: '/logos/Solflare.png',
        width: 50,
        height: 50,
      },
      name: 'Solflare',
    },
    {
      img: {
        source: '/logos/Uniswap.webp',
        width: 50,
        height: 50,
      },
      name: 'Uniswap',
    },
    {
      img: {
        source: '/logos/Tangem-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Tangem Wallet',
    },
    {
      img: {
        source: '/logos/kaspium.webp',
        width: 50,
        height: 50,
      },
      name: 'Kaspium',
    },
    {
      img: {
        source: '/logos/kraken.png',
        width: 50,
        height: 50,
      },
      name: 'Kraken',
    },
    {
      img: {
        source: '/logos/zerion.png',
        width: 50,
        height: 50,
      },
      name: 'Zerion',
    },
    {
      img: {
        source: '/logos/atomic_wallet_logo_dark_rounded.png',
        width: 50,
        height: 50,
      },
      name: 'Atomic',
    },
    {
      img: {
        source: '/logos/coinomi.png',
        width: 50,
        height: 50,
      },
      name: 'Coinomi',
    },
    {
      img: {
        source: '/logos/Ronin.png',
        width: 50,
        height: 50,
      },
      name: 'Ronin',
    },
    {
      img: {
        source: '/logos/Tezos-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Tezos wallet',
    },
    {
      img: {
        source: '/logos/Electrum.png',
        width: 50,
        height: 50,
      },
      name: 'Electrum',
    },
    {
      img: {
        source: '/logos/MetaMask_Fox.svg.png',
        width: 50,
        height: 50,
      },
      name: 'Metamask',
    },
    {
      img: {
        source: '/logos/Binance.jpg',
        width: 50,
        height: 50,
      },
      name: 'Binance Chain',
    },
    {
      img: {
        source: '/logos/Yoroi-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Yoroi wallet',
    },
    {
      img: {
        source: '/logos/crypto.com.jpg',
        width: 50,
        height: 50,
      },
      name: 'Crypto.Com',
    },
    {
      img: {
        source: '/logos/Eternl-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Eternl Wallet',
    },
    {
      img: {
        source: '/logos/Flint-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Flint wallet',
    },
    {
      img: {
        source: '/logos/Trezor-Logo.webp',
        width: 50,
        height: 50,
      },
      name: 'Trezor Wallet',
    },
    {
      img: {
        source: '/logos/Digitex.png',
        width: 50,
        height: 50,
      },
      name: 'Digitex',
    },
    {
      img: {
        source: '/logos/ledger.jpg',
        width: 50,
        height: 50,
      },
      name: 'Ledger',
    },
    {
      img: {
        source: '/logos/Leap-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Leap Wallet',
    },
    {
      img: {
        source: '/logos/helium-hnt-logo.png',
        width: 50,
        height: 50,
      },
      name: 'Helium Wallet',
    },
    {
      img: {
        source: '/logos/Loopring.webp',
        width: 50,
        height: 50,
      },
      name: 'Loopring',
    },
    {
      img: {
        source: '/logos/tron-trx-logo.png',
        width: 50,
        height: 50,
      },
      name: 'Tron',
    },
    
  ];