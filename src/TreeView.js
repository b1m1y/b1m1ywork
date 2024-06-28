import React from 'react';
import TreeNode from './TreeNode';

const treeData = {
  title: 'Справочники',
  children: [
    {
      title: 'Все справочники',
      children: [
        {
          title: 'Документы',
          children: [
            { title: 'Виды документов' },
            { title: 'Документы' },
            { title: 'Документы НМО' },
            { title: 'Документы СУД' },
            { title: 'Инвентарная книга' },
            { title: 'Роли пользователей СУД' },
          ]
        },
        {
          title: 'Классификаторы',
          children: [
            { title: 'Управление вариантами' },
          ]
        },
        {
          title: 'Общие справочники',
          children: [
            { title: 'Государства' },
            { title: 'Поставщики' },
          ]
        },
        {
          title: 'Системные справочники',
          children: [
            {
              title: 'Бизнес-процессы',
              children: [
                { title: 'Бизнес-процессы' },
                { title: 'Важность' },
                { title: 'Действия бизнес-процессов' },
                { title: 'Схемы бизнес-процессов' },
              ]
            },
            { title: 'Внешние приложения' },
            { title: 'Генераторы отчётов' },
            { title: 'Глобальные параметры' },
            { title: 'Глоссарий' },
            { title: 'Группы и пользователи' },
            { title: 'Единицы измерения' },
            {
              title: 'Задания',
              children: [
                { title: 'Задания' },
                { title: 'Категории' },
                { title: 'Отчеты по поручениям СУД' },
                { title: 'Поручения СУД' },
              ]
            },
          ]
        },
      ]
    },
    { title: 'Изображения' },
    { title: 'Календари' },
    { title: 'Кодификатор' },
    { title: 'Конфигурация СУД' },
    { title: 'Макросы' },
    { title: 'Настройки адресной книги' },
    { title: 'Настройки нумерации' },
    { title: 'Отчёты' },
    { title: 'Правила именования ревизий' },
    { title: 'Реестр счетчиков кодификатора' },
    { title: 'Сертификаты' },
    { title: 'Структурированные документы' },
    { title: 'Темы и задачи' },
    {
      title: 'Управление замечаниями',
      children: [
        { title: 'Замечания' },
      ]
    },
    {
      title: 'Управление процессами',
      children: [
        { title: 'Процедуры' },
      ]
    },
    { title: 'Упрощённый фильтр' },
    { title: 'Шаблоны сообщений' },
    {
      title: 'Справочники PDM',
      children: [
        {
          title: 'Архив',
          children: [
            { title: 'Абоненты' },
            { title: 'Внешние документы' },
            { title: 'Журнал операций над объектами' },
            { title: 'Журнал регистрации рассылочных листов' },
            { title: 'Инвентарные книги' },
            { title: 'Карточки учета ИИ' },
            { title: 'Каталоги' },
            { title: 'Пользовательские настройки' },
            { title: 'Рассылочные листы' },
          ]
        },
        { title: 'Сопроводительные письма' },
        { title: 'Генератор отчетов' },
        { title: 'Извещения об изменениях' },
        { title: 'Изменения' },
        { title: 'Классификатор изделий' },
        { title: 'Контексты проектирования' },
        { title: 'Правила настройки интеграции приложений' },
        { title: 'Разделы спецификаций' },
        { title: 'Стандартные изделия' },
        { title: 'Типы структур изделий' },
        { title: 'Характеристики изделий' },
        { title: 'Экземпляры изделий' },
        { title: 'Электронная структура изделий' },
        {
          title: 'Справочники СУОД',
          children: [
            { title: 'Документы' },
            { title: 'Заявки на дополнение НСИ' },
            { title: 'Классификатор ЕСКД' },
            { title: 'Классификатор ОКВЭД2' },
            { title: 'Классификатор ОКЕИ' },
            { title: 'Классификатор ОКОПФ' },
            { title: 'Классификатор ОКП' },
            { title: 'Классификатор ОКПД2' },
            { title: 'Классификатор ОКСМ' },
            { title: 'Кодификатор ЕКПС' },
          ]
        },
        {
          title: 'Контрагенты',
          children: [
            { title: 'Контрагенты' },
          ]
        },
        {
          title: 'Материалы',
          children: [
            {
              title: 'Климатические...',
              children: [
                { title: 'Климатические исполнения изделий' },
                { title: 'Климатические исполнения изделий и категории размещения деталей с покрытиями' },
              ]
            },
            { title: 'Эксплуатация и хранение изделий' },
            { title: 'Материал' },
            { title: 'НТД' },
            { title: 'Ограничительный перечень' },
            {
              title: 'Параметры для стандартных деталей',
              children: [
                { title: 'Параметры стандартных изделий' },
                { title: 'Резьба' },
              ]
            },
            {
              title: 'Покрытие',
              children: [
                { title: 'Параметры для покрытий' },
                { title: 'Покрытие' },
              ]
            },
            {
              title: 'Свойства',
              children: [
                { title: 'Вариант поставки' },
                { title: 'Визуальные свойства' },
                { title: 'Дополнительные свойства' },
                { title: 'Механические свойства' },
                { title: 'Механические свойства уточненные' },
                { title: 'Нормы расхода' },
                { title: 'Режимы' },
                { title: 'Состав' },
                { title: 'Состав кабеля' },
                { title: 'Технологические свойства' },
                { title: 'Физические свойства' },
                { title: 'Эксплуатационные свойства' },
                { title: 'Электрические свойства' },
              ]
            },
            {
              title: 'Системные',
              children: [
                { title: 'Системный справочник материалов' },
                { title: 'Формат отображения' },
                { title: 'Формирование обозначений' },
              ]
            },
            { title: 'Сортамент материала' },
            { title: 'Номенклатурный справочник' },
          ]
        },
        { title: 'Общероссийский классификатор стандартов' },
        { title: 'Покрытия' },
        {
          title: 'Реестр адресов',
          children: [
            { title: 'Реестр адресов' },
            { title: 'Тип адресного элемента' },
          ]
        },
        {
          title: 'Системные справочники',
          children: [
            { title: 'Параметры автозаполняемых полей' },
            {
              title: 'Параметры дедубликации',
              children: [
                { title: 'Ключевые параметры справочников' },
              ]
            },
            {
              title: 'Параметры нормализации',
              children: [
                { title: 'Параметры нормализации' },
              ]
            },
            {
              title: 'Параметры синхронизации',
              children: [
                { title: 'Журнал планировщика синхронизации' },
                { title: 'Источники / Потребители' },
                { title: 'Отношения полей' },
                { title: 'Отношения связей' },
                { title: 'Отношения справочников' },
                { title: 'Отношения типов' },
                { title: 'Планировщик синхронизации' },
              ]
            },
            { title: 'Справочники сопоставления' },
            {
              title: 'Управление параметрами СИ',
              children: [
                { title: 'Атрибуты СТИ' },
                { title: 'Классификатор СТИ' },
                { title: 'Параметры СТИ' },
                { title: 'Правила' },
                { title: 'Управление параметрами СИ' },
              ]
            },
          ]
        },
        {
          title: 'Стандартные изделия',
          children: [
            { title: 'Детали и узлы сосудов и аппаратов' },
            { title: 'Детали проката и профили' },
            { title: 'Конструктивные элементы' },
          ]
        },

      ]
    },
  ]
}


const TreeView = ({ searchTerm, activeFilters }) => {
  const filterTree = (node, term, filters) => {
    if (node.title.toLowerCase().includes(term.toLowerCase())) {
      if (filters.length === 0) return true;
      if (filters.includes('showDocuments') && node.title.includes('Документы')) return true;
      if (filters.includes('showClassifiers') && node.title.includes('Классификаторы')) return true;
      if (filters.includes('showSystemReferences') && node.title.includes('Системные справочники')) return true;
      if (filters.includes('customFilter') && node.title.toLowerCase().includes(filters.find(f => f.startsWith('customFilter')).split(':')[1].toLowerCase())) return true;
    }
    if (node.children) {
      const filteredChildren = node.children.filter(child => filterTree(child, term, filters));
      return filteredChildren.length > 0;
    }
    return false;
  };

  const filteredTreeData = (searchTerm || activeFilters.length > 0) ?
      (filterTree(treeData, searchTerm, activeFilters) ? {...treeData} : null) :
      treeData;

  return (
      <div className="directory-tree">
        <ul className="directory-tree" style={{ paddingLeft: '0' }}>
          {filteredTreeData && <TreeNode node={{...filteredTreeData, level: 0}} searchTerm={searchTerm} activeFilters={activeFilters} />}
        </ul>
      </div>
  );
};

export default TreeView;