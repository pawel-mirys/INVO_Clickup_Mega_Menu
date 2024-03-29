import styles from './Card.module.scss';

export const cardVariants = {
  tasks: styles.card_tasks,
  docs: styles.card_docs,
  goals: styles.card_goals,
  whiteboards: styles.card_whiteboards,
  dashboards: styles.card_dashboards,
  chat: styles.card_chat,
  templates: styles.card_templates,
  clickapps: styles.card_clickapps,
  integrations: styles.card_integrations,
  views: styles.card_views,
  hierarchy: styles.card_hierarchy,
  automations: styles.card_automations,
  team: styles.card_team,
  useCase: styles.card_useCase,
  type: styles.card_type,
  gettingStarted: styles.card_gettingStarted,
  clickupUniversity: styles.card_clickupUniversity,
  demos: styles.card_demos,
  import: styles.card_import,
  customers: styles.card_customers,
  helpDocs: styles.card_helpDocs,
  services: styles.card_services,
  consultants: styles.card_consultants,
  professionalServices: styles.card_professionalServices,
  thirdParty: styles.card_thirdParty,
} as const;
