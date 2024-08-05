import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const responseText = 'ああ良き天気 心安らかなり 日本の夏 蝉の声 いま静かにして 木の下に宿れるなり 我が心 その宿れるなりと同じき 安き心にある';

  return NextResponse.json({ message: responseText });
}