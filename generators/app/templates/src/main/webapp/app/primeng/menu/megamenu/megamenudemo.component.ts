import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-megamenu',
    templateUrl: './megamenudemo.component.html',
    styles: []
})
export class MegaMenuDemoComponent implements OnInit {
    activeIndex = 0;
    msgs: Message[] = [];
    private items: object;

    ngOnInit() {
        this.items = [
            {
                label: 'HOME & FURNITURE', icon: 'fa-home',
                items: [
                    [
                        {
                            label: 'Home Furnishing',
                            items: [{label: 'Cushions'}, {label: 'Throws'}, {label: 'Rugs & Doormats'}, {label: 'Curtains'}]
                        },
                        {
                            label: 'Home Accessories',
                            items: [{label: 'Artificial Flowers'}, {label: 'Lighting'}, {label: 'Storage'}, {label: 'Photo Frames'}]
                        }
                    ],
                    [
                        {
                            label: 'Cooking & Dinner',
                            items: [{label: 'Cookware'}, {label: 'Dinnerware'}, {label: 'Bakerware'}]
                        },
                        {
                            label: 'Bed & Bath',
                            items: [{label: 'Towels'}, {label: 'Bath Mats'}]
                        }
                    ]
                ]
            },
            {
                label: 'Men', icon: 'fa-male',
                items: [
                    [
                        {
                            label: 'Clothing',
                            items: [{label: 'Shirts'}, {label: 'Trousers'}, {label: 'Jeans'}]
                        },
                        {
                            label: 'Shoes & Boots',
                            items: [{label: 'Boots'}, {label: 'Slippers'}, {label: 'Casual Shoes'}]
                        },

                    ],
                    [
                        {
                            label: 'Suits',
                            items: [{label: 'Luxury suits'}, {label: 'Summer suits'}]
                        },
                        {
                            label: 'Accessories',
                            items: [{label: 'Bags'}, {label: 'Hats'}, {label: 'Ties'}]
                        }
                    ],
                    [
                        {
                            label: 'Collections',
                            items: [{label: 'Gadgets'}, {label: 'Holiday shop'}]
                        },
                        {
                            label: 'Underware & pyjamas',
                            items: [{label: 'Socks'}, {label: 'Underware'}]
                        }
                    ]
                ]
            },
            {
                label: 'Women', icon: 'fa-female',
                items: [
                    [
                        {
                            label: 'Clothing',
                            items: [{label: 'Blazers'}, {label: 'Shorts'}, {label: 'Skirts'}]
                        },
                        {
                            label: 'Footwear',
                            items: [{label: 'Boots'}, {label: 'Sandals'}]
                        },
                        {
                            label: 'Bags',
                            items: [{label: 'Hand bags'}, {label: 'Hats'}]
                        }
                    ],
                    [
                        {
                            label: 'Fit',
                            items: [{label: 'Maternity'}, {label: 'Fuller bust'}]
                        }
                    ]
                ]
            },
            {
                label: 'Kids', icon: 'fa-child',
                items: [
                    [
                        {
                            label: 'Boys',
                            items: [{label: 'Coats'}, {label: 'Shirts'}]
                        },
                        {
                            label: 'Girls',
                            items: [{label: 'Tops'}, {label: 'Skirts'}]
                        }
                    ],
                    [
                        {
                            label: 'Toys',
                            items: [{label: 'Toys'}, {label: 'Fancy Dress'}]
                        },
                        {
                            label: 'Collections',
                            items: [{label: 'Wedding'}, {label: 'Holiday'}]
                        }
                    ]
                ]
            }
        ];
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
