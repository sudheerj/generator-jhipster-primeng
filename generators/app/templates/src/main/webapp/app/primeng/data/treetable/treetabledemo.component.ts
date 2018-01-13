import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message, TreeNode, MenuItem} from 'primeng/components/common/api';
import {TreeNodeService} from './service/treenode.service';

@Component({
    selector: 'jhi-treetable',
    templateUrl: './treetabledemo.component.html',
    styles: []
})
export class TreeTableDemoComponent implements OnInit {
    msgs: Message[] = [];

    activeIndex = 0;

    basicTreeTable: TreeNode[];

    singleSelectionTreeTable: TreeNode[];

    multipleSelectionTreeTable: TreeNode[];

    checkboxSelectionTreeTable: TreeNode[];

    templateTreeTable: TreeNode[];

    contextmenuTreeTable: TreeNode[];

    lazyTreeTable: TreeNode[];

    selectedTouristPlace: TreeNode;

    selectedPlace: TreeNode;

    selectedTouristPlaces: TreeNode[];

    selectedMultiTouristPlaces: TreeNode[];

    items: MenuItem[];

    constructor(private nodeService: TreeNodeService) { }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.basicTreeTable = places.data);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.singleSelectionTreeTable = places.data);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.multipleSelectionTreeTable = places.data);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.checkboxSelectionTreeTable = places.data);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.templateTreeTable = places.data);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.contextmenuTreeTable = places.data);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.lazyTreeTable = places.data);

        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedPlace)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedPlace)}
        ];
    }

    nodeSelect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    nodeUnselect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    onRowDblclick(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: 'The TreeTable row double click is invoked'});
    }

    nodeExpand(event: any) {
        if (event.node) {
            // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getTouristPlaces().subscribe((nodes: any) => event.node.children = nodes.data);
        }
    }

    viewNode(node: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: node.data.name});
    }

    deleteNode(node: TreeNode) {
        node.parent.children = node.parent.children.filter( (n) => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }
}
