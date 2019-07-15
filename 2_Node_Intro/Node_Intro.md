# 2. Introduction to Node

## Some Intro to Different Programming Models

* **One user, One Process Programming**
  * Traditional programming does I/O same was as it does local function calls
  * It blocks the process when doing I/O operations
  * Which didn't scale well with the widespread of computer networks and the Internet
  * Managing many processes places a big burden on the OS - in memory & context switching costs
    * As a result, the performance of these tasks starts to reduce after a certain number of processes is reached

* **Multi-threaded Programming**
  * Alternative to above model
  * When one thread is waiting on I/O operation, another thread can takeover the CPU.
  * When I/O operation finishes, the thread can wake up, which means the thread that was running can be interrupted and eventually be resumed
  * Programmers must be careful with concurrent access to the shared memory state by multiple threads
  * Have to use synchronization primitives like locks and semaphores to synchronize access to some data structures
  * **If the application relies heavily on a shared state threads, this type of programming can easily lead to strange bugs and difficult to debug**
















**Thread**
  * Thread is a kind of light-weight process that shares memory with every other thread within the same process


**CPU-bound activities**
* CPU-bound activities are tasks that primarily consume CPU time during execution. In general, these tasks are computationally heavy algorithms operating on in-memory data. In terms of a web applications, this applies to tasks such as input validation, template rendering or on-the-fly encoding/decoding of content.

**I/O-bound activities** :
I/O-bound activities are tasks mainly limited by I/O resources, such as network I/O or file I/O. I/O-bound activities often take place when tasks operates on external data that is not (yet) part of its own memory. In case of our architectural model, this includes access to most platform components, including storage backends, background services and external services.
