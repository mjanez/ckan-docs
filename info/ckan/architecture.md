# CKAN Architecture

## Introduction

This document describes the architecture of CKAN [^1].

You will also find out how to do common tasks such as theming or testing, in each of the architectures.

## CKAN architecture

You can see one single Python process:

```mermaid
graph TB
  subgraph ckanclassic["CKAN"]
    ckancore["Core"]
  end
```

When you want to extend core functionality of CKAN, you write a Python package that must be installed in CKAN. This way, the extension will also run in the same process as the core functionality. This is known as a monolithic architecture.

```mermaid
graph TB
  subgraph ckanclassic["CKAN"]
    ckancore["Core"] --> ckanext["CKAN Extension 1"]
  end
```

When you start to add multiple features, through extensions, what you get is one single Python process running many non-related functionalities.

```mermaid
graph TB
  subgraph ckanclassic["CKAN"]
    ckancore["Core"] --> ckanext["CKAN Extension 1"]
    ckancore --> ckanext2["CKAN Extension 2"]
    ckancore --> ckanext3["CKAN Extension 3"]
    ckancore --> ckanext4["CKAN Extension 4"]
    ckancore --> ckanext5["CKAN Extension n"]
  end
```

This monolithic approach has advantages in terms of simplicity of development and deployment, especially when the system is small. However, as it grows in scale and scope, there are an increasing number of issues.

In this approach, an optional extension has the ability to crash the whole CKAN instance. Every new feature must be written in the same language and framework (e.g. [`python`](https://www.python.org/), leveraging [`Flask`](https://flask.palletsprojects.com/)). And, perhaps most fundamentally, the overall system is highly coupled, making it complex and hard to understand, debug, extend, and evolve.

## Architectures
### CKAN
This diagram is based on the file `docker-compose.yml` of [github.com/mjanez/ckan-docker](https://github.com/mjanez/ckan-docker) (`docker-compose.dev.yml` has the same components, but different configuration).
 
A difference from this diagram to the file is that we are not including DataPusher, as it is not a required dependency.

![ckan-docker](../../static/img/ckan-docker/ckan-docker-services.png)

>[!TIP]
> Databases may run as Docker containers, or rely on third-party services such as Amazon Relational Database Service (RDS).


```mermaid
graph LR

CKAN[CKAN web app]

CKAN --> DB[(Database)]
CKAN --> Solr[(Solr)]
CKAN --> Redis[(Redis)]

subgraph Docker container
  CKAN
end
```

Same setup showing some of the key extensions explicitly:

```mermaid
graph LR
  core[CKAN Core] --> DB[(Database)]
  datastore --> DB2[(Database - DataStore)]
  core --> Solr[(Solr)]
  core --> Redis[(Redis)]
  
  subgraph Docker container
    core
    datastore
    xloader/datapusher
    harvest
    spatial
    schemingdcat
    ...
  end
```

CKAN ships with several core extensions that are built-in. Here, together with the list of main components, we list a couple of them:

Name | Type | Dev |  Repository | Description
-----|------|------------|------------|------------
CKAN | Application (API + Worker) |  | [Link](https://github.com/ckan/ckan) | Data management system (DMS) for powering data hubs and data portals. It's a monolithical web application that includes several built-in extensions and dependencies, such as a job queue service. In theory, it's possible to run it without any extensions.
xloader | CKAN Extension |  | [Link](https://github.com/ckan/ckanext-xloader) | A replacement for DataPusher because it offers ten times the speed and more robustness
datastore | CKAN Extension |  | [Link](https://github.com/ckan/ckan/tree/master/ckanext/datastore) | The interface between CKAN and the structure database, the one receiving datasets and resources (CSVs). It includes an API for the database and an administrative UI.
harvest | CKAN Extension |  | [Link](https://github.com/ckan/ckanext-harvest) | This extension provides a common harvesting framework for CKAN extensions and adds a CLI and WUI to CKAN to manage harvesting sources and jobs. Requires the inclusion of custom harvesters from [ckanext-schemingdcat](https://github.com/mjanez/ckanext-schemingdcat?tab=readme-ov-file#harvesters).
geoview | CKAN Extension |  | [Link](https://github.com/ckan/ckanext-geoview)  | Contains view plugins to display geospatial files and services in CKAN. It contains an OpenLayers based viewer originally developed by Philippe Duchesne and other view plugins that used to be part of ckanext-spatial.
spatial | CKAN Extension | | [Link](https://github.com/ckan/ckanext-spatial) | Add geospatial capabilities to CKAN, |
dcat | CKAN Extension | ✔️ | [Link](https://github.com/mjanez/ckanext-dcat) | Development a profiles to add the [Spanish Metadata Core](https://datos.gob.es/es/doc-tags/nti-risp) with the aim of completing the minimum metadata elements included in the current datasets in accordance with [GeoDCAT-AP](https://semiceu.github.io/GeoDCAT-AP/releases/) and [INSPIRE](https://inspire.ec.europa.eu/about-inspire). |
scheming | CKAN Extension | | [Link](https://github.com/mjanez/ckanext-scheming) | Provides a way to configure and share metadata schemas using a YAML or JSON schema description. Custom validation and template snippets for editing and display are supported.
resourcedictionary | CKAN Extension | ✔️ | [Link](https://github.com/OpenDataGIS/ckanext-resourcedictionary) | This extension extends the default CKAN Data Dictionary functionality by adding possibility to create data dictionary before actual data is uploaded to datastore. 
schemingdcat | CKAN Extension | ✔️ | [Link](https://github.com/mjanez/ckanext-schemingdcat) | provides functions and templates specifically designed to extend [ckanext-scheming](https://github.com/mjanez/ckanext-scheming) and includes DCAT enhancements to adapt CKAN schema to GeoDCAT-AP and several improvements such as multilang for datasets, orgs and groups or new theming.
fluent | CKAN Extension | ✔️ | [Link](https://github.com/mjanez/ckanext-fluent) | Provides a way to store and return multilingual fields in CKAN datasets, resources, organizations and groups. |
Database | Database |  | [Link](https://www.postgresql.org/) | People tend to use a single PostgreSQL instance for this. Separated in multiple databases, it's the place where CKAN stores its own information (sometimes referred as "MetaStore" and "HubStore"), rows of resources (StructuredStore or DataStore), and raw datasets and resources ("BlobStore" or "FileStore"). The latter may store data in the local filesystem or cloud providers, via extensions.
Solr | Database |  | [Link](https://solr.apache.org/) | It provides indexing and full-text search for CKAN.
Redis | Database | | [Link](https://redis.io/) |  Lightweight key-value store, used for caching and job queues.
ckan-pycsw | Endpoint | ✔️ | [Link](https://github.com/mjanez/ckan-pycsw)  | PyCSW Endpoint of Open Data Portal with docker compose config. Harvest the CKAN catalogue in a CSW endpoint based on existing spatial datasets in the open data portal.          

## Glossary

### API

An HTTP API, usually following the REST style.

### Application

A Python package, an API, a worker... It may have other applications as dependencies.
  
### CKAN Extension

A Python package following specification from [CKAN Extending guide](https://docs.ckan.org/en/2.8/extensions/index.html).
  
### Database

An organized collection of data.

### Dataset

A group of resources made to be distributed together.
  
### Frontend Theme

A Node project specializing behavior present in [Frontend v2](https://github.com/datopian/frontend-v2).
  
### Resource

A data blob. Common formats are CSV, JSON, and PDF.
  
### System

A group of applications and databases that work together to accomplish a set of tasks.
  
### Worker

An application that runs tasks in background. They may run recurrently according to a given schedule, or as soon as it's requested by another application.

## Appendix

### Architecture - CKAN with DataPusher

```mermaid
graph TB
  subgraph DataPusher
    datapusherapi["DataPusher API"]
    datapusherworker["CKAN Service Provider"]
    SQLite[(SQLite)]
  end
  
  subgraph CKAN
    core
    datapusher[datapusher ext]
    datastore
    ...
  end
  
  core[CKAN Core] --> datastore
  datastore --> DB[(Database)]
  datapusherapi --> core
  datapusher --> datapusherapi
```

Name | Type | Repository | Description
-----|------|------------|------------
DataPusher | System | [Link](https://github.com/ckan/datapusher) | Microservice that parses data files and uploads them to the datastore.
DataPusher API | API | [Link](https://github.com/ckan/datapusher) | HTTP API written in Flask. It is called from the built-in `datapusher` CKAN extension whenever a resource is created (and has the right type).
CKAN Service Provider | Worker | [Link](https://github.com/ckan/ckan-service-provider) | Library for making web services that make functions available as synchronous or asynchronous jobs.
SQLite | Database | | Unknown use. Possibly a worker dependency.

### Microservices and CKAN decoupled

The main way to address these problems while gaining extra benefits is to move to a microservices-based architecture.

Thus, we recommend building the next version of CKAN – CKAN v3 – on a microservices approach.

With microservices, each piece of functionality runs in its own service and process. 

```mermaid
graph TB
  subgraph ckanapi3["CKAN API 3"]
    ckanapi31["API 3"]
  end

  subgraph ckanapi2["CKAN API 2"]
    ckanapi21["API 2"]
  end
  
  subgraph ckanapi1["CKAN API 1"]
    ckanapi11["API 1"]
  end

  subgraph ckanfrontend["CKAN frontend"]
    ckanfrontend1["Frontend"]
  end
  
  ckanfrontend1 --> ckanapi11
  ckanfrontend1 --> ckanapi21
  ckanfrontend1 --> ckanapi31
```

### Incremental Evolution – Hybrid v3

One of the other advantages of the microservices approach is that it can also be used to extend and evolve current CKAN v2 solutions in an incremental way. We term these kinds of solutions "Hybrid v3," as they are a mix of v2 and v3 together. 

For example, a Hybrid v3 data portal could use a new microservice written in Node for the frontend, and combine that with CKAN v2 (with v2 extensions).

```mermaid
graph TB
  subgraph ckanapi3["CKAN API 3"]
    ckanapi31["API 3"]
  end

  subgraph ckanapi2["CKAN API 2"]
    ckanapi21["API 2"]
  end
  
  subgraph ckanapi1["CKAN API 1"]
    ckanapi11["API 1"]
  end

  subgraph ckanfrontend["CKAN frontend"]
    ckanfrontend1["Frontend"]
  end
  
  subgraph ckanclassic["CKAN"]
    ckancore["Core"] --> ckanext["CKAN Extension 1"]
    ckancore --> ckanext2["CKAN Extension 2"]
  end
  
  ckanfrontend1 --> ckancore
  ckanfrontend1 --> ckanapi11
  ckanfrontend1 --> ckanapi21
  ckanfrontend1 --> ckanapi31
```

The hybrid approach means we can evolve CKAN v2 "Classic" to CKAN v3 "Next Gen" incrementally. In particular, it allows people to keep using their existing v2 extensions, and upgrade them to new microservices gradually.

### Comparison of Approaches

|              | CKAN v2 (Classic) | CKAN v3 (Next Gen) | CKAN v3 Hybrid |
| ------------ | ------------------| -------------------| ---------------|
| Architecture | Monolithic        | Microservice       | Microservice with v2 core |
| Language     | Python            | You can write services in any language you like.<br/><br/>Frontend default: JS.<br/>Backend default: Python | Python and any language you like for microservices. |
| Frontend (and theming) | Python with Python CKAN extension | Flexible. Default is modern JS/NodeJS based | Can use old frontend but default to new JS-based frontend. |
| Data Packages | Add-on, no integration | Default internal and external format | Data Packages with converter to old CKAN format. |
| Extension | Extensions are libraries that are added to core runtime. They must therefore be built in python and are loaded into the core process at build time. "Template/inheritance" model where hooks are in core and it is core that loads and calls plugins. This means that if a hook does not exist in core then the extension is stymied. | Extensions are microservices and can be written in any language. They are loaded into the url space via kubernetes routing manager. Extensions hook into "core" via APIs (rather than in code). Follows a "composition" model rather than inheritance model | Can use old style extensions or microservices. |
| Resource Scaling | You have a single application so scaling is of the core application. | You can scale individual microservices as needed. | Mix of v2 and v3 |

## Why v3: Long Version

What are the problems with CKAN v2's monolithic architecture in relation to microservices v3?

* **Poor Developer Experience (DX), innovability, and scalability due to coupling**. Monolithic means "one big system" => Coupling & Complexity => hard to understand, change and extend. Changes in one area can unexpectedly affect other areas. 
  * DX to develop a small new API requires wiring into CKAN core via an extension. Extensions can interact in unexpected ways.
  * The core of people who fully understand CKAN has stayed small for a reason: there's a lot of understand.
  * https://github.com/ckan/ckan/issues/5333 is an example of a small bug that's hard to track down due to various paths involved.
  * Harder to make incremental changes due to coupling (e.g. Python 3 upgrade requires *everything* to be fixed at once - can't do rolling releases).
* **Stability**. One bad extension crashes or slows down the whole system
* **One language => Less developer flexibility (Poor DX)**. Have to write *everything* in Python, including the frontend. This is an issue especially for the frontend: almost all modern frontend development is heavily Javascript-based and theme is the #1 thing people want to customize in CKAN. At the moment, that requires installing *all* of CKAN core (using Docker) plus some familiarity with Python and Jinja templating. This is a big ask.
* **Extension stablity and testing**. Testing of extensions is painful (at least without careful factoring in a separate mini library) and are therefore often not tested; they don't have Continuous Integration (CI) or Continuous Deployment (CD). As an example, a highly experienced Python developer at Datopian was still struggling to get extension tests working 6 months into their CKAN work.
* **DX is poor especially when getting started**. Getting CKAN up and running requires multiple external services (database, Solr, Redis, etc.) making Docker the only viable way for bootstraping a local development environment. This makes getting started with CKAN daunting and painful.
* **Vertical scalability is poor**. Scaling the system is costly as you have to replicate the whole core process in every machine.
* **System is highly coupled.** Extensions b/c in process tend to end up with significant coupling to core which makes them brittle (has improved with plugins.toolkit)
  * Upgrading core to Python 3 requires upgrading *all* extensions because they run in the same process.
  * Search Index is not a separate API, but in Core. So replacing Solr is hard.

The top 2 customizations of CKAN are slow and painful and require deep knowledge of CKAN:

* Theming a site.
* Customizing the metadata.


[^1]: CKAN Code architecture. Official documentation. https://docs.ckan.org/en/latest/contributing/architecture.html