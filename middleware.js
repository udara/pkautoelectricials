import { NextResponse } from 'next/server';

export function middleware(req) {
    const host = req.headers.get('host');

    // If the request is from 'www.', redirect to non-www
    if (host.startsWith('www.')) {
        const nonWwwHost = host.replace(/^www\./, '');
        const url = req.nextUrl.clone();
        url.host = nonWwwHost;
        return NextResponse.redirect(url, 301);
    }

    // Proceed without changes if not www
    return NextResponse.next();
}
