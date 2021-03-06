// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const body: SchemaObject = {
  title: 'Body',
  description: 'Template body',
  type: 'object',
  required: ['type', 'text'],
  properties: {
    type: {
      title: 'Body type',
      description: 'The body should have a fixed or variable text. Variable text can have variables using format _{{var_name}}_',
      type: 'string',
      enum: ['TEXT_FIXED', 'TEXT_TEMPLATE'],
    },
    text: {
      title: 'Body text',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default body;
