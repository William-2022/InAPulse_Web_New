import React from "react";
import { Typography, Grid, Box, List } from "@mui/material";
import {
  Section,
  Header,
  SubHeader,
  Paragraph,
  BoldHeadedListItem,
  CustomListItem,
  BoldedSubHeaderCategory,
} from "../components/Privacy";

export default function Privacy() {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          height: "300px",
          bgcolor: "card.main",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            alignItems: "center",
            fontFamily: "Noto Sans SC, Helvetica, arial, sans-serif",
            fontWeight: "bold",
            marginRight: "2em",
            marginLeft: "2em",
          }}
        >
          PRIVACY POLICY
        </Typography>
      </Box>
      <Box sx={{ width: "80%", mx: "10%", my: "5%" }}>
        <Section>
          <Header>I. Introduction</Header>
          <Paragraph>
            The aim of In A Pulse Corporation’s Privacy Policy is to inform you
            that we value your trust and that we are committed to protecting
            your personal information that is necessary for the administration
            of lawfully authorized purposes in accordance with section 38(2) of
            the{" "}
            <cite>
              Freedom of Information and Protection of Privacy Act (FIPPA).
            </cite>
          </Paragraph>
        </Section>
        <Section>
          <Header>II. Overview</Header>
          <SubHeader>A. Scope</SubHeader>
          <Paragraph>
            The scope of this Private Policy is applicable to users of{" "}
            <cite>In A Pulse</cite>’s services in the Greater Toronto Area
            (GTA), including users of <cite>In A Pulse</cite>’s website,
            <cite>In A Pulse</cite> app and <cite>In A Pulse</cite> driver
            mobile apps. This Privacy Policy explains how we collect, use,
            handle, retain, disclose, and protect your information when you use
            <cite>In A Pulse</cite> website ,<cite>In A Pulse</cite> app and{" "}
            <cite>In A Pulse</cite> driver app, and when you communicate
            with our personnel. It specifically applies to:
            <List>
              • <cite>In A Pulse</cite> Customers: individuals who request the
              delivery of different items.
              <br />• <cite>In A Pulse</cite> Delivery Partners: Drivers who are
              either full-time employees of <cite>In A Pulse</cite>, or
              independent subcontractors who are doing delivery.
              <br />{" "}
            </List>
            This Privacy Policy also governs In A Pulse’s other collections of
            personal data pertaining to its services such as contact information
            of individuals who use accounts owned by In A Pulse for Business
            customers, and data of those who start but do not complete
            applications to be In A Pulse delivery partners; or other personal
            data in connection with our mapping technology and features. Without
            your consent to collect, use, and disclose your information we are
            unable to provide you with the data about our delivery service.
            <br />
            If you do not agree with this Privacy Policy, please do not provide
            us with your personal information.
          </Paragraph>
        </Section>
        <Section>
          <SubHeader>B. What is Personal Data?</SubHeader>
          <Paragraph>
            Personal data (sometimes called "personal information" or
            "personally identifying information") is information that reveals
            something about and could be used to{" "}
            <strong>identify an individual</strong>. This includes:
            <List>
              <BoldHeadedListItem header={"Directly"}>
                &nbsp; identifying information, such as a name or address.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={"Indirectly"}>
                &nbsp; identifying information, such as a name or address.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={"Technical"}>
                &nbsp; information such as cookie data and IP address.
              </BoldHeadedListItem>
            </List>
            Personal data is the subject of privacy law, and{" "}
            <cite>In A Pulse</cite> complies – as it is already stated above -
            with section 38(2) of the{" "}
            <cite>
              Freedom of Information and Protection of Privacy Act (FIPPA)
            </cite>
            . Therefore, it is your free choice to disclose to us your personal
            information. By making such a choice when you communicate with us,
            or when you use In A Pulse website/apps, you are consenting to the
            collection, use, disclosure, retention, handling, and processing of
            your personal information for the purposes of providing you with our
            delivery service. Please ensure that all of your provided private
            information is true, complete, and correct.
          </Paragraph>
        </Section>
        <Section>
          <Header>III. Data collections and uses</Header>
          <Paragraph>
            <cite>In A Pulse</cite> collects personal data:
            <List>
              • provided by users to <cite>In A Pulse</cite>, such as during
              account creation
              <br />
              <br />
              • created during the use of our services, such as location, app
              usage, and device data
              <br />
              <br />
              • from other sources, such as other users or account owners,
              business partners, vendors, insurance and financial solution
              providers, and governmental authorities
              <br />
              <br />
            </List>
          </Paragraph>
        </Section>
        <Section>
          <SubHeader>1. Data provided by users</SubHeader>
          <Paragraph>
            This includes:
            <List>
              <BoldHeadedListItem header={`User profile information`}>
                We collect data when users place orders or create or update
                their In A Pulse account. This may include their name, email,
                phone number, login name and password, address, profile picture,
                payment or banking information (including related payment
                verification information), driver’s license, and other
                government identification documents (which may indicate document
                numbers as well as birth date, gender, and photo). This also
                includes vehicle or insurance information of delivery partners,
                emergency contact information, user settings, and evidence of
                health or fitness to provide services using In A Pulse apps.
                When it is required for certain In A Pulse services, this may
                include gender and/or occupation.
              </BoldHeadedListItem>
              <BoldHeadedListItem
                header={`Background check and identity verification `}
              >
                (<cite>In A Pulse delivery</cite> partners)This may include
                information such as the delivery partner’s history or criminal
                record (where permitted by law), license status, known aliases,
                prior addresses, and right to work. This information may be
                collected by an authorized third party (vendor) on{" "}
                <cite>In A Pulse</cite>’s behalf. We also verify the identities
                of persons who request alcohol delivery and recipients of those
                orders.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={`Demographic data`}>
                We may collect demographic data about users through user
                surveys, or receive them from third parties.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={`User content`}>
                We collect the data submitted by users when they contact In A
                Pulse customer support center and provide ratings or
                compliments.
              </BoldHeadedListItem>
            </List>
          </Paragraph>
        </Section>
        <Section>
          <SubHeader>2. Data created during the use of our services.</SubHeader>
          <Paragraph>
            This includes:
            <List>
              <BoldHeadedListItem header={`Location data`}>
                (In A Pulse delivery partners and In A Pulse customer) We
                collect In A Pulse delivery partners’ precise location data to
                enable deliveries, enable delivery tracking and safety features,
                prevent and detect fraud, and satisfy legal requirements. In A
                Pulse collects this data when the mobile apps are running in the
                foreground (app open and on-screen) or background (app open but
                not on-screen) of their mobile device.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={`Transaction information`}>
                We collect transaction information related to the use of our
                services, including the type of services requested or provided,
                order details, payment transaction information, delivery
                information, date and time the service was provided, amount
                charged, distance traveled, and payment method. Additionally, if
                someone uses a customer’s promotion code, we may associate the
                customer’s name with that person.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={`Usage Data`}>
                We collect data about how users interact with our services. This
                includes data such as access dates and times, app features or
                pages viewed, app crashes and other system activity, and type of
                browser. In some cases, we collect this data through cookies,
                pixels, tags, and similar tracking technologies that create and
                maintain unique identifiers.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={`Device Data`}>
                We may collect data about the devices used to access our
                services, including the hardware models, device IP address or
                other unique device identifiers, operating systems and versions,
                software, preferred languages, advertising identifiers, and
                device motion data, and mobile network data.
              </BoldHeadedListItem>
              <BoldHeadedListItem header={`Communications data`}>
                We enable users to communicate with each other (
                <cite>In A Pulse</cite>&nbsp; delivery partners and{" "}
                <cite>In A Pulse</cite> customers) and <cite>In A Pulse</cite>
                &nbsp; through <cite>In A Pulse</cite>’s mobile apps and
                website. For example, we enable delivery partners and customers
                to call, text, or send other files to each other (generally
                without disclosing their telephone numbers to each other). To
                provide this service, <cite>In A Pulse</cite> receives some data
                regarding the calls, texts, or other communications, including
                the date and time of the communications and the content of the
                communications. <cite>In A Pulse</cite>&nbsp; may also use this
                data for customer support services (including to resolve
                disputes between users), for safety and security purposes, to
                improve our services and features, and for analytics.
              </BoldHeadedListItem>
            </List>
          </Paragraph>
        </Section>
        <Section>
          <SubHeader>3. Data from other sources</SubHeader>
          <Paragraph>
            These include:
            <List>
              <CustomListItem>
                • <strong>Users participating in our referral programs.</strong>
                &nbsp; Let say, when a user refers another person, we receive
                the referred person’s personal data from that user.
              </CustomListItem>
              <CustomListItem>
                <cite>In A Pulse</cite> account owners who request services for
                or on behalf of other users, or who enable such users to request
                or receive services through their accounts. This includes owners
                of <cite>In A Pulse</cite> Business accounts.
              </CustomListItem>
              <CustomListItem>
                {" "}
                • <cite>In A Pulse</cite> providing information in connection
                with claims or disputes.
              </CustomListItem>
              <CustomListItem>
                {" "}
                • <cite>In A Pulse</cite> business partners in connection with
                debit or credit cards issued by a financial institution in
                partnership with In A Pulse to the extent disclosed in the terms
                and conditions for the card.
              </CustomListItem>
              <CustomListItem>
                • Vendors who help us verify users’ identity, background
                information, and eligibility to work, or who screen users in
                connection with sanctions, anti-money laundering, or
                know-your-customer requirements
              </CustomListItem>
              <CustomListItem>
                • Insurance, vehicle, or financial services providers for the
                customers and/or delivery partners
              </CustomListItem>
              <CustomListItem>
                • Marketing service providers or data resellers whose data
                <cite>In A Pulse</cite> uses for marketing or research
              </CustomListItem>
              <CustomListItem>
                • Law enforcement officials, public health officials, and other
                government authorities
              </CustomListItem>
            </List>
            <cite>In A Pulse</cite> may combine the data collected from these
            sources with other data in its possession.
          </Paragraph>
        </Section>
        <Section>
          <SubHeader>C. How we use personal data</SubHeader>
          <Paragraph>
            The personal data we collect is used to provide the delivery
            service. <cite>In A Pulse</cite> uses personal data to enable
            reliable and convenient delivery. We also use such data:
            <List>
              <CustomListItem>• for customer support </CustomListItem>
              <CustomListItem>• for research and development </CustomListItem>
              <CustomListItem>
                • to enable communications between users{" "}
              </CustomListItem>
              <CustomListItem>
                • to enhance the safety and security of our users and services
              </CustomListItem>
              <CustomListItem>
                • to send marketing and non-marketing messages to users
              </CustomListItem>
              <CustomListItem>
                • in connection with legal proceedings
              </CustomListItem>
            </List>
            <cite>In A Pulse</cite> does not sell or share user personal data
            with third parties for their direct marketing, except with users’
            consent.
            <br />
            We use personal data we collect:
            <br />
            <br />
            1. <cite>In A Pulse</cite> uses data to provide, personalize,
            maintain, and improve our services. This includes using data to:
            <List>
              <CustomListItem>• create/update accounts</CustomListItem>
              <CustomListItem>
                • enable delivery services (such as using location data to
                facilitate delivery order pick-up and drop-off), to facilitate
                the use of our services by those with disabilities
              </CustomListItem>
              <CustomListItem>• process payments</CustomListItem>
              <CustomListItem>
                • track and share the progress of deliveries
              </CustomListItem>
              <CustomListItem>
                • facilitate insurance, vehicle, invoicing, or financing
                solutions
              </CustomListItem>
              <CustomListItem>
                • perform necessary operations to maintain our service,
                including troubleshooting of software bugs and operational
                problems; to conduct data analysis, testing, monitoring, and
                analyzing usage and activity trends.
              </CustomListItem>
            </List>
            <cite>In A Pulse</cite> performs the above activities, including the
            collection and use of location data for purposes of these
            activities, on the grounds that they are necessary to fulfill our
            obligations towards users under our Terms and Conditions.
            <br />
            <BoldedSubHeaderCategory header={`2. Safety and security`}>
              We use personal data to help maintain the safety, security, and
              integrity of our services and users. This includes:
            </BoldedSubHeaderCategory>
            <List>
              <CustomListItem>
                • verifying users' identity and eligibility to provide
                deliveries, through reviews of background checks, where
                permitted by law, to help prevent the use of our services by
                unsafe delivery partners or for unsafe delivery
              </CustomListItem>
              <CustomListItem>
                • payment methods, and preventing and combating unauthorized
                access to users’ accounts.
              </CustomListItem>
            </List>
            In addition, where permitted by law, we may use facial recognition
            technology to process user profile photographs, identification
            photographs, or other user-submitted photographs for the sole
            purpose of preventing identity-borrowing or use of our services by
            unauthorized delivery partners.
            <BoldedSubHeaderCategory header={`3. Customer support`}>
              <cite>In A Pulse</cite> uses the information we collect (which may
              include call recordings) to provide customer support; to
              investigate and address user concerns; to monitor and improve our
              customer support responses.
            </BoldedSubHeaderCategory>
            <BoldedSubHeaderCategory header={`4. Research and development`}>
              We may use personal data for testing, research, analysis, product
              development, and machine learning to improve the user experience.{" "}
              <br />
              <cite>In A Pulse</cite> performs the above activities on the
              grounds that they are necessary to fulfill our obligations towards
              users under our Terms and Conditions.
            </BoldedSubHeaderCategory>
            <BoldedSubHeaderCategory
              header={`5. Enabling communications between users`}
            >
              For example, a delivery partner may message or call the customer
              to confirm a pick-up or drop-off location.
              <br />
              <cite>In A Pulse</cite> performs the above activities on the
              grounds that they are necessary to fulfill our obligations towards
              users under our Terms and Conditions.
            </BoldedSubHeaderCategory>
            <BoldedSubHeaderCategory header={`6. Marketing`}>
              <cite>In A Pulse</cite> may use personal data to market our
              services to our users. This includes sending to users information
              about In A Pulse services, promotions, surveys, news, updates, and
              events. We may do so through various methods, including email,
              text messages, push notifications, and ads.
            </BoldedSubHeaderCategory>
            <BoldedSubHeaderCategory
              header={`7. Legal proceedings and requirements`}
            >
              We may use personal data to investigate or address claims or
              disputes relating to the use of <cite>In A Pulse</cite>’s
              services, to satisfy requirements under applicable laws,
              regulations, or operating licenses or agreements, or pursuant to
              legal processes or governmental requests, including from law
              enforcement. <br />
              <cite>In A Pulse</cite>&nbsp; performs the above activities on the
              grounds that they are necessary for purposes of{" "}
              <cite>In A Pulse</cite>’s legitimate interests in investigating
              and responding to claims and disputes relating to the use of{" "}
              <cite>In A Pulse</cite>’s services and features, and/or necessary
              for compliance with applicable legal requirements.
            </BoldedSubHeaderCategory>
          </Paragraph>
          <SubHeader>Protection of Information</SubHeader>
          <Paragraph>
            We will take all necessary steps to ensure that your private
            information is safeguarded in accordance with the Canadian Privacy
            Act and this Privacy Policy. All information you provide to us will
            be properly stored in our database. We have implemented security
            measures designed to protect your information from unauthorized
            access. Since your account is protected by your user name and
            password, we urge you to keep your personal information safe by not
            disclosing your password to anyone, and by logging out of your
            account after each use. We further protect your information from
            potential security breaches by implementing security measures that
            include encryption, firewalls, and secure socket layer technology.
            However, these measures do not fully guarantee that your information
            will not be accessed, disclosed, altered, or destroyed by a breach
            of such firewalls.
          </Paragraph>
          <SubHeader>Disclosure of Your Personal Information</SubHeader>
          <Paragraph>
            It is necessary for us to disclose your personal information when
            you sign a contract with us to become our customer, to verify your
            identity, to inform you about our timely and reliable delivery
            service, to inform you about any changes that we make to it, or when
            we administer our website, including troubleshooting, analyzing
            statistics, conducting research and tests.
          </Paragraph>
          <SubHeader>Sharing of Information</SubHeader>
          <Paragraph>
            We share the information that you provide to us with our Customer
            Service representatives and <cite>In A Pulse</cite> delivery
            partners so that we can provide the delivery service to you. We may
            share it also with our group of companies and other websites/apps
            that we might operate. Additionally, we may share your data with
            selected third parties such as internet hosting providers in order
            to host the website and related infrastructure, services,
            applications, and contact management systems to send emails, social
            media messages, and SMS. Under certain exceptional circumstances, we
            may also disclose your information to third parties. This would be
            the case when the disclosure is required by law, court orders,
            legal, judicial, and regulatory proceedings. Furthermore, we may
            share your information when it would be necessary to protect the
            safety of our employees, our property, or the public, the prevention
            or detection of crime, including exchanging information with other
            companies or organizations for the purposes of fraud protection, and
            credit risk reduction.
            <br /> We also collect information about you and your use of{" "}
            <cite>In A Pulse</cite> website/apps through cookies.
          </Paragraph>
          <SubHeader>Use of Cookies</SubHeader>
          <Paragraph>
            Cookies are used for many purposes, such as providing customized web
            page content and displaying website navigation history. They are
            small text files that a website creates and accesses through your
            browser when you visit the website. Cookies used by{" "}
            <cite>In A Pulse</cite> do not contain personally-identifying
            information and do not give us access to anything on your devices.
            However, cookies allow us to monitor how often you visit our
            website, your activities performed while you are using our website,
            and for what purposes you are doing it. This information helps us to
            dynamically generate content on web pages specifically designed for
            you and also allows us to statistically monitor how many people are
            using our website. You can always configure web browsers to reject
            cookies or notify you when cookies are placed. Data generated from{" "}
            <cite>In A Pulse</cite> cookies are never shared with third parties.
          </Paragraph>
        </Section>
        <Section>
          <SubHeader>D. Data retention and deletion</SubHeader>
          <Paragraph>
            <cite>In A Pulse</cite> retains user data as long as necessary for
            the purposes described above. Users may request deletion of their
            accounts at any time. <cite>In A Pulse</cite> may retain user data
            after a deletion request due to legal or regulatory requirements or
            for reasons stated in this Privacy Policy.
          </Paragraph>
          <SubHeader>Changes to Privacy Policy</SubHeader>
          <Paragraph>
            The Company reserves the right to change this Privacy Policy at any
            time. We will notify you of significant changes to our Privacy
            Policy by sending a notice to your email address specified in your
            account. You should periodically check our website/apps and this
            Privacy Policy page for updates.
          </Paragraph>
        </Section>
      </Box>
    </Grid>
  );
}
