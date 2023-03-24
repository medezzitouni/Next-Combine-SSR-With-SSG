import { NextResponse } from 'next/server';
import players from '../players.json';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    const result = players.filter((player) => 
        player.firstname.toLowerCase().includes(name?.toLowerCase() ?? "") ||
        player.lastname.toLowerCase().includes(name?.toLowerCase() ?? "")
    )

    return NextResponse.json(result);
}
  