// src/app/page.tsx
'use client';

import Card from './components/Card';
import GNB from './components/GNB';

const featureItems = [
  '선수분석',
  'MVP 베스트11',
  '트레이드',
  '영입방출',
  '라인업',
  '전력제안',
  '설명',
];

const matchResults = [
  {
    id: 1,
    stadium: '제주 월드컵경기장 14:00',
    home: '제주',
    away: '안양',
    score: '1 - 2',
  },
  {
    id: 2,
    stadium: '제주 월드컵경기장 14:00',
    home: '제주',
    away: '안양',
    score: '1 - 2',
  },
  {
    id: 3,
    stadium: '제주 월드컵경기장 14:00',
    home: '제주',
    away: '안양',
    score: '1 - 2',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <GNB />
      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <Card className="bg-white shadow-sm">
            <span className="text-sm font-medium text-emerald-600">K리그</span>
            <h1 className="mt-3 text-4xl font-bold leading-snug text-gray-900 sm:text-5xl">
              2026년
              <br />
              월별 예측 순위
            </h1>
          </Card>
          <Card className="flex h-80 items-center justify-center bg-gray-300 text-3xl font-bold text-gray-700 sm:h-96">
            그래프
          </Card>
        </section>

        <section className="space-y-5">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {featureItems.map((label) => (
              <Card
                key={label}
                className="flex min-w-[120px] flex-col items-center gap-3 border-dashed border-gray-200 bg-white py-6"
              >
                <div className="h-14 w-14 rounded-2xl bg-gray-200" />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">최근 경기 결과</h2>
            <div className="flex gap-3">
              <button
                aria-label="이전 경기"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-gray-600 hover:border-gray-400 hover:text-gray-800"
              >
                ‹
              </button>
              <button
                aria-label="다음 경기"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-gray-600 hover:border-gray-400 hover:text-gray-800"
              >
                ›
              </button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {matchResults.map((match) => (
              <Card key={match.id} className="relative space-y-5 border-gray-200 bg-white">
                <span className="absolute left-6 top-6 rounded-full bg-rose-200 px-3 py-1 text-xs font-semibold text-rose-600">
                  경기요약
                </span>
                <div className="pt-12 text-xs font-medium text-gray-500">
                  {match.stadium}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-14 rounded-xl bg-gray-200" />
                    <span className="text-sm font-medium text-gray-700">
                      {match.home}
                    </span>
                  </div>
                  <div className="flex h-12 w-20 items-center justify-center rounded-full bg-gray-200 text-base font-semibold text-gray-700">
                    {match.score}
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-14 rounded-xl bg-gray-200" />
                    <span className="text-sm font-medium text-gray-700">
                      {match.away}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}