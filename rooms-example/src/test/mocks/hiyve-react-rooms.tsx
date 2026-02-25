// Serialize props, converting functions to a marker string
function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export function RoomsList(props: Record<string, unknown>) {
  return <div data-testid="rooms-list" data-props={serializeProps(props)} />;
}

export function ActiveRoomsList(props: Record<string, unknown>) {
  return <div data-testid="active-rooms-list" data-props={serializeProps(props)} />;
}
