import { NextResponse } from 'next/server';
import { getCertifications } from '@/lib/certifications';

export async function GET() {
  try {
    const certs = await getCertifications();
    return NextResponse.json(certs);
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return NextResponse.json({ error: 'Failed to fetch certifications' }, { status: 500 });
  }
}
