import { LucideIcon } from "lucide-react";
import {
    Flame,
    Users,
    ShieldCheck,
    Trophy,
    Cpu,
    Zap,
    Heart,
    MessageCircle,
    BookOpen,
    Laptop
} from "lucide-react";

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    icon?: LucideIcon;
}

export const PARTICIPANT_CONTENT = {
    hero: {
        title: "覚醒の合図",
        catchphrase: "君の「可能性」に火をつけろ。",
        subphrase: "AIという最強の相棒を武器に。広島から障害の垣根を越えて。",
        tags: ["未経験歓迎", "賞金あり", "最強のPC貸出あり"],
        cta: "今すぐエントリーする（定員10チーム）",
    },
    introduction: {
        title: "NOROSHI.HIROSHIMAへようこそ",
        message: "「自分にはスキルなんてない」「毎日同じ作業の繰り返しで、将来が不安」……そう思っていませんか？\nNOROSHI.HIROSHIMAは、AIを使いこなし、あなたの「困った」を「解決」に変える実践型ハッカソンです。\nAIがいれば、「作りたい」と思ったその日にアプリを作れる時代が来ました。",
    },
    support: {
        title: "3つの「絶対挫折させない」サポート",
        description: "初心者が最も不安に思う「準備」と「孤独」を解消する仕組みを用意しています。",
        items: [
            {
                id: "discord",
                title: "24時間Discordコミュニティ",
                description: "メンターや仲間といつでも繋がれる。困ったときはすぐ相談。",
                icon: MessageCircle
            },
            {
                id: "ama",
                title: "事前お悩み相談会「AMA」",
                description: "Ask Me Anything. スタート前の不安を全て解消します。",
                icon: Heart
            },
            {
                id: "day0",
                title: "「Day 0」ガイド配布",
                description: "難しい環境構築も手順書通りでOK。スタートラインまで手引きします。",
                icon: BookOpen
            }
        ]
    },
    challenges: {
        title: "2つの挑戦ルート",
        routes: [
            {
                id: "route-a",
                name: "Route A: Platinum Challenge",
                description: "企業課題を解決。企業のリアルな業務上の負を、AIで富に変える。",
                prize: "優秀賞には賞金"
            },
            {
                id: "route-b",
                name: "Route B: Personal Challenge",
                description: "自分の悩みを解決。「これがあったら便利なのに」という自身の原体験を形にする。",
                prize: "優秀賞には賞金"
            }
        ],
        grandPrize: "すべてのチームの中から最優秀賞を選定"
    },
    team: {
        title: "最強のトライアングル「3H」",
        description: "プログラミングができなくてもいい。全く違う強みを持つ3人が集まることで、一人では届かない「想定外の答え」に到達できる。",
        message: "凸凹な3人が集まるからこそ、チームになれるんです。",
        roles: [
            {
                id: "hacker",
                role: "Hacker",
                japanese: "作る人",
                description: "AIを使いこなす司令塔。技術でアイデアを具現化する。",
                icon: Cpu
            },
            {
                id: "hustler",
                role: "Hustler",
                japanese: "まとめる・伝える人",
                description: "情熱を言葉にするリーダー。チームを鼓舞し、魅力を発信する。",
                icon: Flame
            },
            {
                id: "hipster",
                role: "Hipster",
                japanese: "魅せる人",
                description: "使いやすさをデザインする。ユーザー体験を最高のものにする。",
                icon: Zap
            }
        ]
    },
    requirements: {
        title: "参加条件・募集要項",
        mandatory: [
            "自力でPCのローマ字入力・検索ができる方",
            "福祉サービス（A型・B型・移行・自立訓練等）を利用中、または検討中の方",
            "障害者雇用枠で就労中の方"
        ],
        welcome: [
            "HTML/CSSの経験がある方",
            "Progate等での学習経験がある方"
        ],
        equipment: {
            bring: "ノートPC持参（Win11推奨、メモリ16GB以上推奨）",
            rental: "最強PC貸出あり: メモリ32GBの爆速ノートPC（月額5,000円）。所属事業所に相談しやすいようサポートします。"
        }
    },
    schedule: {
        title: "6週間のロードマップ",
        steps: [
            {
                step: "Start",
                title: "Discord合流＆準備",
                description: "チームビルディングと環境構築"
            },
            {
                step: "Step 1",
                duration: "2週間",
                title: "学ぶ",
                description: "AI駆動開発の基礎をマスター"
            },
            {
                step: "Step 2",
                duration: "2週間",
                title: "作る",
                description: "3人1組でプロトタイプ構築。中間発表あり"
            },
            {
                step: "Step 3",
                title: "磨く＆発表",
                description: "ブラッシュアップ後、経営者の前でプレゼン！"
            }
        ]
    },
    judging: {
        title: "私たちが大切にするもの",
        description: "技術力だけでなく、人間性と想いを評価します。",
        criteria: [
            { id: "idea", title: "アイデア力", icon: "💡", description: "独自の視点があるか" },
            { id: "ux", title: "使う人への優しさ", icon: "💖", description: "UI/UXへの配慮" },
            { id: "fun", title: "動く楽しさと完成度", icon: "📱", description: "実際に触れるか" },
            { id: "narrative", title: "あなただけの「物語」", icon: "📖", description: "なぜそれを作りたいと思ったのか (最重要)" }
        ]
    },
    faq: [
        {
            q: "未経験でも大丈夫ですか？",
            a: "はい、大丈夫です！「最強のPC」と「Day 0ガイド」、そしてAIがあなたをサポートします。"
        },
        {
            q: "1人での参加は可能ですか？",
            a: "基本は3人1組ですが、お一人での応募も可能です。運営側で最適なチームマッチングを行います。"
        }
    ]
};
