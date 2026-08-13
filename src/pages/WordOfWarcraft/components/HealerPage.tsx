import React, { useMemo, useState } from 'react';
import wowCodesRaw from '../../../../codigoswow.txt?raw';
import '../style.css';

interface Props {
    onBack: () => void;
}

interface AddonInfo {
    name: string;
    description: string;
}

interface CodeBlock {
    id: string;
    title: string;
    code: string;
}

const extractSection = (content: string, startMarker: string, endMarker?: string): string => {
    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) return '';

    const fromStart = startIndex + startMarker.length;
    const endIndex = endMarker ? content.indexOf(endMarker, fromStart) : -1;

    const section = endIndex === -1
        ? content.slice(fromStart)
        : content.slice(fromStart, endIndex);

    return section.trim();
};

const parseAddons = (content: string): AddonInfo[] => {
    return content
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const cleanLine = line.replace(/^[-*]\s*/, '');
            const splitIndex = cleanLine.indexOf(':');

            if (splitIndex === -1) {
                return null;
            }

            return {
                name: cleanLine.slice(0, splitIndex).trim(),
                description: cleanLine.slice(splitIndex + 1).trim(),
            };
        })
        .filter((addon): addon is AddonInfo => Boolean(addon));
};

const copyText = async (text: string): Promise<boolean> => {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        const input = document.createElement('textarea');
        input.value = text;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        return true;
    } catch {
        return false;
    }
};

export function HealerPage({ onBack }: Props) {
    const [copiedId, setCopiedId] = useState<string>('');

    const data = useMemo(() => {
        const uiCode = extractSection(wowCodesRaw, 'UI (Edit Mode):', 'Sarena (Addon):');
        const sarenaCode = extractSection(wowCodesRaw, 'Sarena (Addon):', 'BetterBlizzPlates (Addon):');
        const betterBlizzPlatesCode = extractSection(wowCodesRaw, 'BetterBlizzPlates (Addon):', 'BetterBlizzFrames (Addon):');
        const betterBlizzFramesCode = extractSection(wowCodesRaw, 'BetterBlizzFrames (Addon):', 'Lista de addons que eu uso:');
        const addonsRaw = extractSection(wowCodesRaw, 'Lista de addons que eu uso:');

        const codeBlocks: CodeBlock[] = [
            { id: 'ui-edit-mode', title: 'UI (Edit Mode)', code: uiCode },
            { id: 'sarena', title: 'sArena (Addon)', code: sarenaCode },
            { id: 'better-blizz-plates', title: 'BetterBlizzPlates (Addon)', code: betterBlizzPlatesCode },
            { id: 'better-blizz-frames', title: 'BetterBlizzFrames (Addon)', code: betterBlizzFramesCode },
        ];

        return {
            codeBlocks,
            addons: parseAddons(addonsRaw),
            allCodes: codeBlocks.map((block) => `${block.title}:\n${block.code}`).join('\n\n'),
        };
    }, []);

    const handleCopy = async (text: string, id: string) => {
        const success = await copyText(text);
        if (!success) return;

        setCopiedId(id);
        window.setTimeout(() => setCopiedId(''), 1800);
    };

    return (
        <div className="cargo-glass-wrapper wow-healer-page">
            <div className="cargo-content-max">
                <header className="cargo-header wow-healer-header">
                    <button className="glass-btn-pill" onClick={onBack}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Voltar
                    </button>
                    <h1>Word of Warcraft - Healer</h1>
                    <p>Setup completo de addons e codigos do perfil, prontos para copiar e importar.</p>
                </header>

                <section className="wow-overview-grid">
                    <div className="wow-overview-card">
                        <p className="wow-overview-label">Addons listados</p>
                        <strong>{data.addons.length}</strong>
                    </div>
                    <div className="wow-overview-card">
                        <p className="wow-overview-label">Blocos de codigo</p>
                        <strong>{data.codeBlocks.length}</strong>
                    </div>
                    <div className="wow-overview-card">
                        <p className="wow-overview-label">Acesso rapido</p>
                        <button className="wow-copy-all-btn" onClick={() => handleCopy(data.allCodes, 'all-codes')}>
                            {copiedId === 'all-codes' ? 'Copiado!' : 'Copiar tudo'}
                        </button>
                    </div>
                </section>

                <div className="wow-healer-grid">
                    <section className="wow-card">
                        <h2>Addons que eu uso</h2>
                        <p className="wow-card-subtitle">Lista completa com a descricao de cada addon.</p>
                        <ul className="wow-addon-list">
                            {data.addons.map((addon) => (
                                <li key={addon.name} className="wow-addon-item">
                                    <h3>{addon.name}</h3>
                                    <p>{addon.description}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="wow-card">
                        <h2>Codigos do perfil</h2>
                        <p className="wow-card-subtitle">Cada bloco pode ser copiado individualmente.</p>

                        <div className="wow-code-stack">
                            {data.codeBlocks.map((block) => (
                                <article key={block.id} className="wow-code-card">
                                    <div className="wow-code-header">
                                        <h3>{block.title}</h3>
                                        <button
                                            className="wow-copy-btn"
                                            onClick={() => handleCopy(block.code, block.id)}
                                        >
                                            {copiedId === block.id ? 'Copiado!' : 'Copiar'}
                                        </button>
                                    </div>

                                    <pre className="wow-code-content">{block.code}</pre>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
