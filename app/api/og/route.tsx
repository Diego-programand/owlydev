import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { protocol, host } = new URL(req.url);
    const baseUrl = `${protocol}//${host}`;

    // Cargamos recursos
    const [logoData, fontData] = await Promise.all([
      fetch(new URL(`${baseUrl}/ImagoTipoOwlyDev.png`)).then((res) => res.arrayBuffer()),
      // Nueva URL directa al archivo .ttf de Plus Jakarta Sans (Bold)
      fetch(
        new URL('https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-800-normal.ttf')
      ).then((res) => {
        if (!res.ok) throw new Error('Fallo al cargar la fuente');
        return res.arrayBuffer();
      }),
    ]);

    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Innovación que cautiva. Software que escala.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            position: 'relative',
            fontFamily: 'Jakarta',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10, // CORREGIDO: Sin 'px'
            }}
          >
            <img
              src={logoData as any}
              width="380" 
              style={{ marginBottom: 10 }}
            />
            
            <div style={{ 
              fontSize: 50, 
              fontWeight: 800, 
              color: '#1a73be', 
              textAlign: 'center',
              maxWidth: '600px',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              textShadow: '0 0 40px rgba(35, 173, 207, 0.3)'
            }}>
              {title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Jakarta',
            data: fontData,
            style: 'normal',
            weight: 800,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(e.message);
    return new Response(`Error: ${e.message}`, { status: 500 });
  }
}