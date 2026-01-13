import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  return (
    <section className={css.page}>
      <div className={css.card}>
        <header className={css.header}>
          <h1 className={css.heading}>📗 Phonebook</h1>
          <p className={css.subtitle}>Organize your contacts, naturally</p>
        </header>

        <ContactForm />

        <div className={css.contactsSection}>
          <h2 className={css.subheading}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </section>
  );
};
