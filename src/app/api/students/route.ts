import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseServer';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('students')
      .select();

    if (error) {
      throw new Error(error.message);
    }

    const response = NextResponse.json(data);
    return response;
  } catch (error) {
    const response = NextResponse.json({ error: (error as Error).message }, { status: 500 });
    return response;
  }
}
