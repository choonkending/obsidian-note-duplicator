import { IncrementLastNumberTransformer, NestLastNumberTransformer } from './transformers';

const config = [
    {
        "id": "duplicate-increment-last-number",
        "title": "Duplicate: Increment Last Number",
        "description": "Increments the last number in the title",
        "transformer": IncrementLastNumberTransformer
    },
    {
        "id": "duplicate-nest-last-number",
        "title": "Duplicate: Nest Last Number",
        "description": "Nests the last number in the title",
        "transformer": NestLastNumberTransformer
    }
];

export default config;