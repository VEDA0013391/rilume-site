export interface DiscordCommandOption {
  type: number;
  name: string;
  description: string;
  required?: boolean;
}

export interface DiscordCommand {
  id: string;
  application_id: string;
  name: string;
  description: string;

  type: number;

  nsfw?: boolean;

  integration_types?: number[];

  contexts?: number[];

  options?: DiscordCommandOption[];
}