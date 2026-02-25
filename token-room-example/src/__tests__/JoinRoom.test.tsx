import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));

import { JoinRoom } from '../components/JoinRoom';

describe('JoinRoom', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders JoinWithTokenForm', () => {
    render(<JoinRoom joinToken="abc123" region="us-east-1" />);
    expect(screen.getByTestId('join-with-token-form')).toBeInTheDocument();
  });

  it('passes joinToken and region to JoinWithTokenForm', () => {
    render(<JoinRoom joinToken="my-token" region="eu-west-1" />);
    const form = screen.getByTestId('join-with-token-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props.joinToken).toBe('my-token');
    expect(props.region).toBe('eu-west-1');
  });

  it('passes userNameStorageKey to JoinWithTokenForm', () => {
    render(<JoinRoom joinToken="abc" region="us-east-1" />);
    const form = screen.getByTestId('join-with-token-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props.userNameStorageKey).toBe('hiyve-token-example-userName');
  });

  it('passes onCreateRoom callback to JoinWithTokenForm', () => {
    render(<JoinRoom joinToken="abc" region="us-east-1" />);
    const form = screen.getByTestId('join-with-token-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props.onCreateRoom).toBe('__fn__');
  });

  it('passes onUserNameChange callback to JoinWithTokenForm', () => {
    const onUserNameChange = vi.fn();
    render(<JoinRoom joinToken="abc" region="us-east-1" onUserNameChange={onUserNameChange} />);
    const form = screen.getByTestId('join-with-token-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props.onUserNameChange).toBe('__fn__');
  });
});
