import type { ReactNode } from 'react';

// Serialize props, converting functions to a marker string and React elements to a marker
function serializeProps(props: Record<string, unknown>): string {
  const seen = new WeakSet();
  return JSON.stringify(props, (_key, value) => {
    if (typeof value === 'function') return '__fn__';
    if (value !== null && typeof value === 'object') {
      if ('$$typeof' in value) return '__react_element__';
      if (seen.has(value)) return '__circular__';
      seen.add(value);
    }
    return value;
  });
}

export function JoinForm(props: Record<string, unknown>) {
  return <div data-testid="join-form" data-props={serializeProps(props)} />;
}

export function ConnectingScreen(props: Record<string, unknown>) {
  return <div data-testid="connecting-screen" data-props={serializeProps(props)} />;
}

export function WaitForHostScreen(props: Record<string, unknown>) {
  return <div data-testid="wait-for-host-screen" data-props={serializeProps(props)} />;
}

export function VideoGrid(props: Record<string, unknown>) {
  return <div data-testid="video-grid" data-props={serializeProps(props)} />;
}

export function ControlBar(props: Record<string, unknown>) {
  return <div data-testid="control-bar" data-props={serializeProps(props)} />;
}

export function Sidebar({
  tabs,
  activeTab,
  onTabChange,
  renderContent,
  ...rest
}: {
  tabs: { id: string; label?: string; badge?: number; [key: string]: unknown }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  renderContent: (tabId: string) => ReactNode;
  [key: string]: unknown;
}) {
  return (
    <div data-testid="sidebar" data-active-tab={activeTab}>
      <div data-testid="sidebar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-testid={`sidebar-tab-${tab.id}`}
            data-badge={tab.badge}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label || tab.id}
          </button>
        ))}
      </div>
      <div data-testid="sidebar-content">
        {renderContent(activeTab)}
      </div>
      <div data-testid="sidebar-props" data-props={serializeProps(rest)} />
    </div>
  );
}

export type ControlBarLayoutMode = 'grid' | 'speaker' | 'sidebar';
export type VideoTileOverlayElement = string;
export type LocalVideoTileOverlayElement = string;
export type SidebarTab = { id: string; label?: string; icon?: unknown; badge?: number; badgeColor?: string; tooltip?: string };
