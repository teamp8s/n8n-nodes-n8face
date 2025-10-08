import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class N8faceApi implements ICredentialType {
	name = 'n8faceApi';
	displayName = 'N8face API';
	documentationUrl = 'https://plus8soft.app.n8n.cloud';

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
