import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

export class N8face implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'N8face',
		name: 'n8face',
		icon: { light: 'file:n8face.svg', dark: 'file:n8face.dark.svg' },
		group: ['transform'],
		version: 1,
		description: 'N8face API integration',
		defaults: {
			name: 'N8face',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'n8faceApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Webhook URL',
				name: 'webhookUrl',
				type: 'string',
				default: 'https://plus8soft.app.n8n.cloud/webhook/e4eeeae4-7f0d-4087-a20b-39f0efbb89d9',
				placeholder: 'Enter your webhook URL',
				description: 'The webhook URL endpoint for N8face API',
				required: true,
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				placeholder: 'Enter text to process',
				description: 'The text to send to N8face API',
				required: true,
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const text = this.getNodeParameter('text', itemIndex, '') as string;
				const webhookUrl = this.getNodeParameter('webhookUrl', itemIndex, '') as string;
				const credentials = await this.getCredentials('n8faceApi');

				if (!credentials?.apiKey) {
					throw new NodeOperationError(this.getNode(), 'API Key is required');
				}

				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'n8faceApi',
					{
						method: 'POST',
						url: webhookUrl,
						headers: {
							'Content-Type': 'application/json',
						},
						body: {
							apiKey: credentials.apiKey,
							text: text,
						},
						json: true,
					},
				);

				returnData.push({
					json: response,
					pairedItem: { item: itemIndex },
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error.message },
						pairedItem: { item: itemIndex },
					});
				} else {
					if (error.context) {
						error.context.itemIndex = itemIndex;
						throw error;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex,
					});
				}
			}
		}

		return [returnData];
	}
}
