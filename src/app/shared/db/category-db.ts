import { Category } from '../models/category-model';

export const CATEGORIES: Category[] = [
    {
        title: 'Active element',
        icon: 'pending_actions',
        color: 'teal',
        url: 'active',
    },
    {
        title: 'Deactive element',
        icon: 'close',
        color: 'cyan',
        url: 'others',
    },
    {
        title: 'New element',
        icon: 'create_new_folder',
        color: '#c2185b',
        url: 'new-elem',
    }
];