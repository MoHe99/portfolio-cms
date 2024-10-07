import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Global Elements')
        .child(
          S.list()
            .title('Global Elements')
            .items(S.documentTypeListItems().filter((item) => item.getId() !== 'page')),
        ),
    ])

export default deskStructure
