import { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class N8faceApi implements ICredentialType {
	name = 'n8faceApi';
	displayName = 'N8face API';
	documentationUrl =
		'https://github.com/teamp8s/n8n-nodes-n8face/tree/main?tab=readme-ov-file#1-configure-credentials';

	icon: Icon = { light: 'file:../icons/n8face.svg', dark: 'file:../icons/n8face.dark.svg' };

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Copy and paste your API key from N8face application',
		},
	];
}
