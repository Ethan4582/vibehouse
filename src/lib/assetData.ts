
export type Asset = {
   id: string;
   image?: string;
   video?: string;
   label: string;
   time: string;
};

// Extracted URLs from user
const v = [
   "https://cdn.sanity.io/files/3fq51aaa/production/27933e4ade17bd71353b8d85b45718d38c43aa9d.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/d616e40690f396f78e71b8fdfd59cb3b1aa55c9d.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/42faf2223c5cc654c81761c9b1256659549b6aba.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/c8cf056d4b4673eddfa6a151ea04b53b192c134a.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/1470de704f9fe305759603833de749288cf25969.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/702bcb084d0568b7c41d64c0526a4842671e6b54.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/89fbcc1a892fac53448102bf3387cf2bb4423957.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/1d50cdb4bb0afa25b30120e06f7b6df7ef3f5901.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/c4203003defa1ee1565b23405387f5bb8130aeb8.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/8fb5eb727f07ca47f9836cf468d2210b58699e16.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/7dfde46126dffdb6531703cbf9b98187cc59633e.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/208e905965ec2097f540ea40319eba4a99e7e607.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/e53eaf3c35c95eb11e9392fc1d76d5ad311da5c7.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/3a53001748a67f827686a943994fb5151c205335.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/d145be779232945be149bb03c835d26cc6e0970a.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/84cd3003aac7a58d5b0ead462db8f05b22ac1440.mp4",
   "https://cdn.sanity.io/files/3fq51aaa/production/923c7166107d03f068afaabe374e28e3a8aee4e8.mp4",
   "https://cdn.prod.website-files.com/68d154612c134abb70a4785a%2F68d5ca79fb6e9d6e3bbeb1fd_8683480-uhd_4096_2160_25fps-transcode.mp4",
   "https://framerusercontent.com/assets/oHeYHSdmyP62ztCVd9CwLKmXkZ0.mp4",
   "https://framerusercontent.com/assets/D4MH4F0VFRiqN0Ka5zy4LY9qAY.mp4",
   "https://framerusercontent.com/assets/nfuJd74TxnafKYC8LucMvGNpyVY.mp4",
   "https://stream.mux.com/NcCIO6QBMm7avCK3zYWdTmqqyip7MDpw/medium.mp4",
   "https://pub-4b0a8f18a97e4b44914872dd0d22870b.r2.dev/videhouse/vd5.mp4",
];

const img = [
     "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/f1.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/ferrari.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/ferrarr_back.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model1.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model2.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model3.png",
    "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/carshoot.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model4.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model5.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model6.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model8.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model7.png",
    "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/carshoot.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/f1.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/ferrari.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/ferrarr_back.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model1.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model2.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model3.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model4.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model5.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model6.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model8.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/model7.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/ChatGPT%20Image%20Mar%203%2C%202026%2C%2012_49_05%20PM.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/Hero20V32037.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/Lavendery2006%20(1).jpeg",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/Moon2011%20(1).png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/gate.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/green_flow.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/layer.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/purple_flow.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_bg/wave.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/art1.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/art2.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/art2.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/billielish.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/plant.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/robo1.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/shirt.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/side_model.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/spacesuit.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/surf.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/wallart.png",
   "https://pub-30f77b34698b4af9acb780d4dfe7ee4d.r2.dev/good_one/good_assets/winter_cabin.png",
];

const lbl = [
   "NEON STREET DRIP", "TOKYO MIDNIGHT DRIVE", "ROOFTOP CITY VIBES", "MILAN STREET STYLE",
   "SUPERCAR GARAGE NIGHT", "PARIS RUNWAY DROP", "LATE NIGHT COFFEE CLUB", "VINTAGE PORSCHE RUN",
   "SOHO STREET MODEL", "LUXURY NIGHT GARAGE", "DESERT LAMBO SESSION", "BROOKLYN FASHION WALK",
   "CITY LIGHTS PORTRAIT", "NIGHT BIKE CRUISE", "LOS ANGELES SUNSET FIT", "STREET CULTURE DROP",
   "TOKYO DRIFT NIGHT", "URBAN ROOFTOP SHOOT", "FERRARI CLUB NIGHT", "MODEL OFF DUTY"
];



export const assets: Record<string, Asset> = {
   a01: { id: "a01", image: img[0], video: v[0], label: lbl[0], time: "00:03:22" },
   a02: { id: "a02", video: v[1], label: lbl[1], time: "00:02:18" },
   a03: { id: "a03", image: img[1], video: v[2], label: lbl[2], time: "00:04:01" },
   a04: { id: "a04", video: v[3], label: lbl[3], time: "00:02:54" },

   a05: { id: "a05", image: img[2], video: "", label: lbl[4], time: "00:03:10" },
   a06: { id: "a06", image: img[3], video: "", label: lbl[5], time: "00:02:48" },
   a07: { id: "a07", image: img[4], video: "", label: lbl[6], time: "00:01:58" },
   a08: { id: "a08", image: img[5], video: "", label: lbl[7], time: "00:02:44" },
   a09: { id: "a09", image: img[6], video: "", label: lbl[8], time: "00:03:05" },
   a10: { id: "a10", image: img[7], video: "", label: lbl[9], time: "00:02:29" },

   a11: { id: "a11", video: v[4], label: lbl[10], time: "00:03:12" },
   a12: { id: "a12", image: img[8], video: v[5], label: lbl[11], time: "00:02:57" },
   a13: { id: "a13", video: v[6], label: lbl[12], time: "00:03:41" },
   a14: { id: "a14", image: img[9], video: v[7], label: lbl[13], time: "00:02:36" },

   a15: { id: "a15", image: img[10], video: "", label: lbl[14], time: "00:03:03" },
   a16: { id: "a16", video: v[8], label: lbl[15], time: "00:02:42" },
   a17: { id: "a17", image: img[11], video: v[9], label: lbl[16], time: "00:02:14" },

   a18: { id: "a18", video: v[10], label: lbl[17], time: "00:03:58" },
   a19: { id: "a19", image: img[12], video: "", label: lbl[18], time: "00:02:31" },
   a20: { id: "a20", video: v[11], label: lbl[19], time: "00:02:19" },
   a21: { id: "a21", video: v[12], label: lbl[0], time: "00:03:04" },
   a22: { id: "a22", image: img[13], video: "", label: lbl[1], time: "00:02:47" },
   a23: { id: "a23", video: v[13], label: lbl[2], time: "00:02:51" },
   a24: { id: "a24", image: img[14], video: v[14], label: lbl[3], time: "00:02:38" },
   a25: { id: "a25", video: v[15], label: lbl[4], time: "00:03:09" },
   a26: { id: "a26", image: img[15], video: "", label: lbl[5], time: "00:02:27" },
   a27: { id: "a27", video: v[16], label: lbl[6], time: "00:03:33" },
   a28: { id: "a28", image: img[16], video: "", label: lbl[7], time: "00:02:21" },
   a29: { id: "a29", video: v[17], label: lbl[8], time: "00:02:49" },
   a30: { id: "a30", image: img[17], video: v[18], label: lbl[9], time: "00:02:33" },
   a31: { id: "a31", video: v[19], label: lbl[10], time: "00:03:06" },
   a32: { id: "a32", image: img[18], video: "", label: lbl[11], time: "00:02:40" },
   a33: { id: "a33", video: v[20], label: lbl[12], time: "00:02:52" },
   a34: { id: "a34", image: img[19], video: "", label: lbl[13], time: "00:02:36" },
   a35: { id: "a35", image: img[20], video: "", label: lbl[14], time: "00:03:02" },

   a36: { id: "a36", image: img[21], video: v[21], label: lbl[15], time: "00:02:44" },
   a37: { id: "a37", video: v[22], label: lbl[16], time: "00:03:11" },
};

export function getAsset(id: string): Asset | undefined {
   return assets[id];
}