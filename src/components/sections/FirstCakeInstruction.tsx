"use client";

import { notoSerifTC, taipeiSansTC } from '@/lib/fonts';

export default function FirstCakeInstruction() {
    return (
        <section className="relative bg-[#FAF9EB] flex flex-col items-center justify-center overflow-visible">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-center ${notoSerifTC.className}`} style={{ color: '#2b4f7e' }}>
                    邀請您一起在這個平台上找回台灣的文化驕傲與創生活力
                </div>
                
                <div className="py-2 max-w-4xl ml-2 sm:ml-2 lg:ml-2">
                    <div className={`space-y-2 text-lg sm:text-xl lg:text-3xl leading-relaxed text-left ${taipeiSansTC.className}`} style={{ color: '#2D2B2B' }}>
                        <p>讓我們從文化(影像)記憶的找尋開始</p>
                        <p>進入充滿文化記憶的文化資產或文化活動中</p>
                        <p>品嘗屬於台灣的人文味道與感性</p>
                        <p>透過科技、行銷與教育</p>
                        <p>讓具代表性的文化意象轉化為文化品牌</p>
                        <p className="mb-6">讓世界看見台灣</p>
                        <p>化為一道光的品牌與產業</p>
                        <p>吸引更多喜愛台灣的朋友們來到這塊土地</p>
                        <p>享受品牌滋養、遊歷文化資產、參與文化活動並踏查文化記憶</p>
                        <p>地方創生的活力就此展開</p>
                        <p>我們的願望其實很簡單</p>
                        <p>那就是</p>
                        <p>文化永續</p>
                        <p>台灣永續</p>
                    </div>
                </div>
            </div>
        </section>

    );
}