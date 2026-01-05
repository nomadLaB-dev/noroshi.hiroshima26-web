
import {
    Users,
    TrendingUp,
    Smile,
    Search,
    Zap,
    ShieldCheck,
    Laptop,
    Handshake
} from "lucide-react";

export const WELFARE_CONTENT = {
    hero: {
        title: "福祉を、アップデートする。",
        catchphrase: "居場所の提供から、社会での役割創出へ。",
        subphrase: "福祉の常識をAIで塗り替える。利用者の「可能性」を最大化するパートナーシップ。",
        cta: "連携について相談する",
    },
    mission: {
        title: "なぜ今、ハッカソンなのか？",
        description: "時代の転換点において、福祉に求められる「価値」が変わってきています。",
        points: [
            {
                title: "制度改正への適応",
                text: "従来の「居場所」から、実社会での「仕事・学び」が評価される時代へ。",
                icon: TrendingUp
            },
            {
                title: "工賃の壁を打破",
                text: "労働集約型の軽作業から、高付加価値なIT・AI業務へのシフト。",
                icon: Zap
            },
            {
                title: "自己肯定感の爆発",
                text: "「支援される側」だった利用者が、企業の課題を解決する「プロ」として認められる経験。",
                icon: Smile
            },
            {
                title: "社会のねじれの解消",
                text: "IT人材不足に悩む地域企業と、新たな武器を持った利用者を繋ぐ。",
                icon: Handshake
            }
        ]
    },
    benefits: {
        title: "事業所として参加するメリット",
        items: [
            {
                title: "新しい支援ノウハウの獲得",
                text: "AI駆動開発（Google Antigravity等）という、最先端の支援スキームを体験・共有できます。",
                icon: Search
            },
            {
                title: "事業所のブランディング",
                text: "「ITに強い事業所」「先進的な取り組みを行う事業所」としてのプレゼンス向上。",
                icon: ShieldCheck
            },
            {
                title: "利用者の定着と意欲向上",
                text: "具体的で刺激的な目標（ハッカソン）があることで、日々の訓練に活気が生まれます。",
                icon: Users
            }
        ],
        consulting: "※ノマドLaBによるIT事業立ち上げコンサルティングも可能です。"
    },
    staffSupport: {
        title: "スタッフの方の負担を最小限に",
        subtitle: "「ITのことはわからないからサポートできない」という不安を払拭します。",
        features: [
            {
                title: "テクニカルサポートは運営が担当",
                text: "Discordでの24時間相談、AMA、Day 0 ガイドにより、技術的なフォローはノマドLaB側ですべて行います。",
            },
            {
                title: "スタッフの役割は「伴走」",
                text: "利用者の体調管理やメンタルケア、挑戦する背中を押すことに専念いただけます。",
            },
            {
                title: "見学・同席大歓迎",
                text: "ハッカソン当日の会場同席も可能です。利用者の成長を間近でご覧ください。",
            }
        ]
    },
    equipment: {
        title: "最強のPCレンタルスキーム",
        description: "高スペックPC（32GBメモリ）の貸出により、ハードウェアの壁を取り払います。",
        specs: "メモリ32GB / 最新Windows 11 / GPU搭載モデル",
        price: "5,000円/月 (要相談)",
        steps: [
            "職員の方から利用者へご紹介（広報物を提供します）",
            "エントリー & 挑戦",
            "Discord合流からハッカソン本番まで伴走"
        ]
    },
    message: {
        title: "共に、広島から狼煙を上げよう",
        text: "「ノマドLaB」と「CodeFox」が、同じ福祉の現場に立つ皆さんと共に、新しい時代のスタンダードを作りたいと考えています。\n一過性のイベントではなく、継続的な連携で、地域の福祉を次のステージへ。",
    }
};
